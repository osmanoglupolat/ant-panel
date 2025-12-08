/**
 * Kanban Board Types
 * Defines the structure for Kanban board columns and cards
 */

export type TaskStatus = "todo" | "in-progress" | "review" | "done";

export type TaskPriority = "low" | "medium" | "high";

export interface KanbanCard {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee?: {
    id: string;
    name: string;
    avatar?: string;
  };
  dueDate?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface KanbanColumn {
  id: string;
  title: string;
  status: TaskStatus;
  cards: KanbanCard[];
  color?: string;
}

export interface KanbanBoard {
  columns: KanbanColumn[];
}

