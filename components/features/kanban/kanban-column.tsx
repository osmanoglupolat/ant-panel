"use client";

import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { KanbanColumn as KanbanColumnType, KanbanCard } from "@/lib/types/kanban";
import { cn } from "@/lib/utils";
import { KanbanCard as KanbanCardComponent } from "./kanban-card";

type KanbanColumnProps = {
  column: KanbanColumnType;
  onAddCard?: (columnId: string) => void;
  onCardClick?: (card: KanbanCard) => void;
};

export function KanbanColumn({
  column,
  onAddCard,
  onCardClick,
}: KanbanColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  const cardIds = column.cards.map((card) => card.id);

  return (
    <div className="flex h-full min-w-[280px] flex-col">
      <Card className="flex h-full flex-col bg-muted/30">
        {/* Column Header */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "h-2 w-2 rounded-full",
                column.color || "bg-muted-foreground"
              )}
            />
            <h3 className="font-semibold text-sm text-foreground">
              {column.title}
            </h3>
            <span className="text-muted-foreground rounded-full bg-background px-2 py-0.5 text-xs font-medium">
              {column.cards.length}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => onAddCard?.(column.id)}
            aria-label={`Add card to ${column.title}`}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Column Content */}
        <div
          ref={setNodeRef}
          className={cn(
            "flex-1 space-y-3 overflow-y-auto p-4 transition-colors",
            isOver && "bg-muted/50"
          )}
        >
          <SortableContext
            items={cardIds}
            strategy={verticalListSortingStrategy}
          >
            {column.cards.length > 0 ? (
              column.cards.map((card) => (
                <KanbanCardComponent
                  key={card.id}
                  card={card}
                  onClick={onCardClick}
                />
              ))
            ) : (
              <div className="text-muted-foreground flex h-32 items-center justify-center rounded-lg border border-dashed text-sm">
                Drop cards here
              </div>
            )}
          </SortableContext>
        </div>
      </Card>
    </div>
  );
}

