"use client";

import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type SortableItem = {
  id: string;
  title: string;
  description: string;
};

/**
 * Initial items for the main sortable list
 */
const INITIAL_ITEMS: SortableItem[] = [
  { id: "1", title: "Item 1", description: "First item - Drag me to reorder" },
  { id: "2", title: "Item 2", description: "Second item - Drag me to reorder" },
  { id: "3", title: "Item 3", description: "Third item - Drag me to reorder" },
  { id: "4", title: "Item 4", description: "Fourth item - Drag me to reorder" },
  { id: "5", title: "Item 5", description: "Fifth item - Drag me to reorder" },
  { id: "6", title: "Item 6", description: "Sixth item - Drag me to reorder" },
];

/**
 * SortableItem Component
 * 
 * A single draggable item in the sortable list.
 * Uses @dnd-kit's useSortable hook for drag functionality.
 */
function SortableItem({ item }: { item: SortableItem }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={isDragging ? "ring-2 ring-primary" : ""}
    >
      <CardContent className="flex items-center gap-3 p-4">
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing touch-none"
          onClick={(e) => e.stopPropagation()}
          aria-label="Drag handle"
        >
          <GripVertical className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium">{item.title}</h4>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * SortablePage Component
 * 
 * Main page component showcasing sortable list functionality.
 * Includes a single sortable list and an example with multiple lists.
 */
export default function SortablePage() {
  const [items, setItems] = useState<SortableItem[]>(INITIAL_ITEMS);

  // Configure drag sensors with activation constraints
  // Prevents accidental drags when clicking
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor)
  );

  /**
   * Handles the drag end event for the main list
   */
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  /**
   * Resets the list to its initial order
   */
  const handleReset = () => {
    setItems([...INITIAL_ITEMS]);
  };

  return (
    <ShowcaseLayout
      title="Sortable"
      description="Sortable list component examples with drag-and-drop functionality."
    >
      <ShowcaseSection
        title="Sortable List"
        description="Drag and drop to reorder items. Items can be moved up and down by dragging the grip handle."
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Drag items by the grip icon to reorder them.
            </p>
            <Button variant="outline" size="sm" onClick={handleReset}>
              Reset Order
            </Button>
          </div>

          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items.map((item) => item.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-2">
                {items.map((item) => (
                  <SortableItem key={item.id} item={item} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Sortable with Multiple Lists"
        description="Example of multiple independent sortable lists side by side"
      >
        <MultipleListsExample />
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}

/**
 * MultipleListsExample Component
 * 
 * Demonstrates multiple independent sortable lists working side by side.
 * Each list has its own state and drag handlers.
 */
function MultipleListsExample() {
  const [listA, setListA] = useState<SortableItem[]>([
    { id: "a1", title: "Task A1", description: "First task in list A" },
    { id: "a2", title: "Task A2", description: "Second task in list A" },
    { id: "a3", title: "Task A3", description: "Third task in list A" },
  ]);

  const [listB, setListB] = useState<SortableItem[]>([
    { id: "b1", title: "Task B1", description: "First task in list B" },
    { id: "b2", title: "Task B2", description: "Second task in list B" },
    { id: "b3", title: "Task B3", description: "Third task in list B" },
  ]);

  // Sensors for both lists
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor)
  );

  /**
   * Handles drag end for List A
   */
  const handleDragEndA = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setListA((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  /**
   * Handles drag end for List B
   */
  const handleDragEndB = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setListB((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-2">
        <h4 className="text-sm font-medium mb-2">List A</h4>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEndA}
        >
          <SortableContext
            items={listA.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-2">
              {listA.map((item) => (
                <SortableItem key={item.id} item={item} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium mb-2">List B</h4>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEndB}
        >
          <SortableContext
            items={listB.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-2">
              {listB.map((item) => (
                <SortableItem key={item.id} item={item} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
