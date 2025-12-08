"use client";

import { useState } from "react";
import { Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/ui/modal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { KanbanCard, TaskPriority, TaskStatus } from "@/lib/types/kanban";
import { toast } from "sonner";

type TaskModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (task: Omit<KanbanCard, "id" | "createdAt" | "updatedAt">) => void;
  columnStatus?: TaskStatus;
  mode?: "create" | "edit";
  initialData?: KanbanCard;
};

export function TaskModal({
  isOpen,
  onClose,
  onSubmit,
  columnStatus,
  mode = "create",
  initialData,
}: TaskModalProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    status: (columnStatus || initialData?.status || "todo") as TaskStatus,
    priority: (initialData?.priority || "medium") as TaskPriority,
    dueDate: initialData?.dueDate || "",
    tags: initialData?.tags?.join(", ") || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error("Title is required");
      return;
    }

    onSubmit({
      title: formData.title.trim(),
      description: formData.description.trim() || undefined,
      status: formData.status,
      priority: formData.priority,
      dueDate: formData.dueDate || undefined,
      tags: formData.tags
        ? formData.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
        : undefined,
    });

    toast.success(mode === "create" ? "Task created!" : "Task updated!");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      header={mode === "create" ? "Create New Task" : "Edit Task"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="Enter task title"
            autoFocus
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            placeholder="Enter task description"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select
              value={formData.status}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, status: value as TaskStatus }))
              }
            >
              <SelectTrigger id="status">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todo">To Do</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="review">Review</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <Select
              value={formData.priority}
              onValueChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  priority: value as TaskPriority,
                }))
              }
            >
              <SelectTrigger id="priority">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="dueDate">Due Date</Label>
          <Input
            id="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, dueDate: e.target.value }))
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tags">Tags (comma-separated)</Label>
          <Input
            id="tags"
            value={formData.tags}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, tags: e.target.value }))
            }
            placeholder="design, frontend, backend"
          />
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">
            {mode === "create" ? "Create Task" : "Save Changes"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

