"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { kanbanData } from "@/lib/mocks/kanban";
import type { KanbanCard, KanbanBoard as KanbanBoardType } from "@/lib/types/kanban";
import { toast } from "sonner";

// Dynamic imports for code splitting - only load when needed
const KanbanBoard = dynamic(
  () =>
    import("@/components/features/kanban/kanban-board").then(
      (mod) => mod.KanbanBoard
    ),
  {
    loading: () => (
      <div className="flex h-96 items-center justify-center rounded-lg border bg-card">
        <div className="text-sm text-muted-foreground">Loading board...</div>
      </div>
    ),
  }
);

const TaskModal = dynamic(
  () =>
    import("@/components/features/kanban/task-modal").then(
      (mod) => mod.TaskModal
    ),
  { ssr: false }
);

export default function KanbanPage() {
  const [board, setBoard] = useState<KanbanBoardType>(kanbanData);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedColumnId, setSelectedColumnId] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<KanbanCard | null>(null);

  const handleAddCard = (columnId: string) => {
    setSelectedColumnId(columnId);
    setSelectedCard(null);
    setIsTaskModalOpen(true);
  };

  const handleCardClick = (card: KanbanCard) => {
    setSelectedCard(card);
    setSelectedColumnId(null);
    setIsTaskModalOpen(true);
  };

  const handleTaskSubmit = (
    taskData: Omit<KanbanCard, "id" | "createdAt" | "updatedAt">
  ) => {
    if (selectedCard) {
      // Edit existing card
      setBoard((prev) => ({
        columns: prev.columns.map((col) => ({
          ...col,
          cards: col.cards.map((card) =>
            card.id === selectedCard.id
              ? {
                  ...card,
                  ...taskData,
                  updatedAt: new Date().toISOString(),
                }
              : card
          ),
        })),
      }));
      toast.success("Task updated successfully!");
    } else {
      // Create new card
      const newCard: KanbanCard = {
        ...taskData,
        id: `card-${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const column = board.columns.find((col) => col.id === selectedColumnId);
      if (column) {
        setBoard((prev) => ({
          columns: prev.columns.map((col) =>
            col.id === selectedColumnId
              ? { ...col, cards: [...col.cards, newCard] }
              : col
          ),
        }));
        toast.success("Task created successfully!");
      }
    }

    setIsTaskModalOpen(false);
    setSelectedCard(null);
    setSelectedColumnId(null);
  };

  const handleCardMove = (
    cardId: string,
    newStatus: string,
    newIndex: number
  ) => {
    // Update board state when card is moved
    // The KanbanBoard component handles the visual update,
    // but we sync the state here for persistence
    setBoard((prev) => {
      // Find the card and its current column
      let cardToMove: KanbanCard | null = null;
      let sourceColumnId: string | null = null;

      for (const col of prev.columns) {
        const card = col.cards.find((c) => c.id === cardId);
        if (card) {
          cardToMove = card;
          sourceColumnId = col.id;
          break;
        }
      }

      if (!cardToMove || !sourceColumnId) return prev;

      // Find target column
      const targetColumn = prev.columns.find((col) => col.status === newStatus);
      if (!targetColumn) return prev;

      // Remove from source, add to target
      return {
        columns: prev.columns.map((col) => {
          if (col.id === sourceColumnId) {
            return {
              ...col,
              cards: col.cards.filter((c) => c.id !== cardId),
            };
          }
          if (col.id === targetColumn.id) {
            const newCards = [...col.cards];
            newCards.splice(newIndex, 0, {
              ...cardToMove,
              status: newStatus as typeof cardToMove.status,
              updatedAt: new Date().toISOString(),
            });
            return { ...col, cards: newCards };
          }
          return col;
        }),
      };
    });
  };

  const column = board.columns.find((col) => col.id === selectedColumnId);
  const columnStatus = column?.status;

  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Kanban Board</h1>
          <p className="text-muted-foreground text-sm">
            Organize and track your tasks
          </p>
        </div>
        <Button onClick={() => handleAddCard(board.columns[0]?.id || "")}>
          <Plus className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>

      <div className="flex-1 overflow-hidden">
        <KanbanBoard
          board={board}
          onCardMove={handleCardMove}
          onAddCard={handleAddCard}
          onCardClick={handleCardClick}
        />
      </div>

      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => {
          setIsTaskModalOpen(false);
          setSelectedCard(null);
          setSelectedColumnId(null);
        }}
        onSubmit={handleTaskSubmit}
        columnStatus={columnStatus}
        mode={selectedCard ? "edit" : "create"}
        initialData={selectedCard || undefined}
      />
    </div>
  );
}

