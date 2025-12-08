"use client";

import { useState, useEffect } from "react";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import type { KanbanBoard as KanbanBoardType, KanbanCard, KanbanColumn } from "@/lib/types/kanban";
import { KanbanColumn as KanbanColumnComponent } from "./kanban-column";
import { KanbanCard as KanbanCardComponent } from "./kanban-card";

type KanbanBoardProps = {
  board: KanbanBoardType;
  onCardMove?: (cardId: string, newStatus: string, newIndex: number) => void;
  onAddCard?: (columnId: string) => void;
  onCardClick?: (card: KanbanCard) => void;
};

export function KanbanBoard({
  board,
  onCardMove,
  onAddCard,
  onCardClick,
}: KanbanBoardProps) {
  const [columns, setColumns] = useState(board.columns);
  const [activeCard, setActiveCard] = useState<KanbanCard | null>(null);

  // Sync with parent board state
  useEffect(() => {
    setColumns(board.columns);
  }, [board.columns]);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor)
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const card = findCardById(active.id as string);
    setActiveCard(card);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveCard(null);

    if (!over) return;

    const activeCard = findCardById(active.id as string);
    if (!activeCard) return;

    const activeColumn = findColumnByCardId(active.id as string);
    const overColumn = findColumnById(over.id as string);

    if (!activeColumn || !overColumn) return;

    // Same column - reorder
    if (activeColumn.id === overColumn.id) {
      const newCards = arrayMove(
        activeColumn.cards,
        activeColumn.cards.findIndex((c) => c.id === active.id),
        activeColumn.cards.findIndex((c) => c.id === over.id)
      );

      setColumns((prev) =>
        prev.map((col) =>
          col.id === activeColumn.id ? { ...col, cards: newCards } : col
        )
      );

      const newIndex = newCards.findIndex((c) => c.id === active.id);
      onCardMove?.(active.id as string, activeColumn.status, newIndex);
      return;
    }

    // Different column - move card
    const activeIndex = activeColumn.cards.findIndex(
      (c) => c.id === active.id
    );
    const overIndex = overColumn.cards.findIndex((c) => c.id === over.id);

    const newActiveCards = activeColumn.cards.filter(
      (c) => c.id !== active.id
    );
    const newOverCards = [...overColumn.cards];
    newOverCards.splice(overIndex >= 0 ? overIndex : newOverCards.length, 0, {
      ...activeCard,
      status: overColumn.status,
    });

    setColumns((prev) =>
      prev.map((col) => {
        if (col.id === activeColumn.id) {
          return { ...col, cards: newActiveCards };
        }
        if (col.id === overColumn.id) {
          return { ...col, cards: newOverCards };
        }
        return col;
      })
    );

    const finalIndex = overIndex >= 0 ? overIndex : newOverCards.length - 1;
    onCardMove?.(active.id as string, overColumn.status, finalIndex);
  };

  const findCardById = (cardId: string): KanbanCard | null => {
    for (const column of columns) {
      const card = column.cards.find((c) => c.id === cardId);
      if (card) return card;
    }
    return null;
  };

  const findColumnById = (columnId: string): KanbanColumn | null => {
    return columns.find((col) => col.id === columnId) || null;
  };

  const findColumnByCardId = (cardId: string): KanbanColumn | null => {
    return (
      columns.find((col) => col.cards.some((c) => c.id === cardId)) || null
    );
  };

  const columnIds = columns.map((col) => col.id);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex h-full gap-4 overflow-x-auto pb-4">
        <SortableContext
          items={columnIds}
          strategy={horizontalListSortingStrategy}
        >
          {columns.map((column) => (
            <KanbanColumnComponent
              key={column.id}
              column={column}
              onAddCard={onAddCard}
              onCardClick={onCardClick}
            />
          ))}
        </SortableContext>
      </div>

      <DragOverlay>
        {activeCard ? (
          <div className="rotate-3 opacity-90">
            <KanbanCardComponent card={activeCard} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

