"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Calendar, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { KanbanCard as KanbanCardType } from "@/lib/types/kanban";
import { cn } from "@/lib/utils";

type KanbanCardProps = {
  card: KanbanCardType;
  onClick?: (card: KanbanCardType) => void;
};

const priorityColors = {
  low: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  high: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

export function KanbanCard({ card, onClick }: KanbanCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: card.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={() => onClick?.(card)}
      className={cn(
        "group cursor-pointer rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md",
        isDragging && "opacity-50 rotate-2"
      )}
    >
      <div className="space-y-3">
        {/* Priority Badge */}
        <div className="flex items-start justify-between">
          <Badge
            variant="outline"
            className={cn(
              "text-xs font-medium",
              priorityColors[card.priority]
            )}
          >
            {card.priority}
          </Badge>
        </div>

        {/* Title */}
        <h4 className="font-semibold text-sm leading-tight text-foreground">
          {card.title}
        </h4>

        {/* Description */}
        {card.description && (
          <p className="text-muted-foreground line-clamp-2 text-xs">
            {card.description}
          </p>
        )}

        {/* Tags */}
        {card.tags && card.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="text-muted-foreground rounded bg-muted px-2 py-0.5 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t">
          {card.assignee ? (
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={card.assignee.avatar} alt={card.assignee.name} />
                <AvatarFallback className="text-xs">
                  {card.assignee.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span className="text-muted-foreground text-xs">
                {card.assignee.name}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-muted-foreground">
              <User className="h-3 w-3" />
              <span className="text-xs">Unassigned</span>
            </div>
          )}

          {card.dueDate && (
            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span className="text-xs">{formatDate(card.dueDate)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

