"use client";

import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { GripVertical, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export type WidgetToggle = {
  id: string;
  label: string;
  enabled: boolean;
};

type WidgetControllerProps = {
  widgets: WidgetToggle[];
  onChange: (widgets: WidgetToggle[]) => void;
  onReset: () => void;
};

export function WidgetController({
  widgets,
  onChange,
  onReset,
}: WidgetControllerProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 6 },
    })
  );

  const handleToggle = (id: string, checked: boolean | "indeterminate") => {
    const next = widgets.map((widget) =>
      widget.id === id ? { ...widget, enabled: Boolean(checked) } : widget
    );
    onChange(next);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = widgets.findIndex((widget) => widget.id === active.id);
    const newIndex = widgets.findIndex((widget) => widget.id === over.id);
    onChange(arrayMove(widgets, oldIndex, newIndex));
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-0">
        <div>
          <CardDescription>Customize</CardDescription>
          <CardTitle className="text-lg">Control your workspace</CardTitle>
        </div>
        <Button variant="ghost" size="sm" onClick={onReset}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </CardHeader>
      <CardContent className="pt-6">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={widgets.map((widget) => widget.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-3">
            {widgets.map((widget) => (
              <SortableToggle
                key={widget.id}
                widget={widget}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
      </CardContent>
    </Card>
  );
}

function SortableToggle({
  widget,
  onToggle,
}: {
  widget: WidgetToggle;
  onToggle: (id: string, checked: boolean | "indeterminate") => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: widget.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-between rounded-xl border border-border/60 px-3 py-2 text-sm bg-card"
    >
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Reorder widget"
          className="cursor-grab text-muted-foreground hover:text-foreground"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="h-4 w-4" />
        </button>
        <span>{widget.label}</span>
      </div>
      <Checkbox
        id={widget.id}
        checked={widget.enabled}
        onCheckedChange={(value) => onToggle(widget.id, value)}
      />
    </div>
  );
}

