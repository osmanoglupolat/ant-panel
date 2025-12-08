"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { calendarEvents } from "@/lib/mocks/calendar";
import type { CalendarEvent } from "@/lib/types/calendar";
import { toast } from "sonner";

// Dynamic imports for code splitting - only load when needed
const CalendarViewComponent = dynamic(
  () =>
    import("@/components/features/calendar/calendar-view").then(
      (mod) => mod.CalendarViewComponent
    ),
  {
    loading: () => (
      <div className="flex h-96 items-center justify-center rounded-lg border bg-card">
        <div className="text-sm text-muted-foreground">Loading calendar...</div>
      </div>
    ),
  }
);

const EventModal = dynamic(
  () =>
    import("@/components/features/calendar/event-modal").then(
      (mod) => mod.EventModal
    ),
  { ssr: false }
);

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>(calendarEvents);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<{
    start: Date;
    end: Date;
  } | null>(null);

  const handleSelectEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setSelectedSlot(null);
    setIsEventModalOpen(true);
  };

  const handleSelectSlot = (slotInfo: { start: Date; end: Date }) => {
    setSelectedSlot(slotInfo);
    setSelectedEvent(null);
    setIsEventModalOpen(true);
  };

  const handleEventSubmit = (eventData: Omit<CalendarEvent, "id">) => {
    if (selectedEvent) {
      // Update existing event
      setEvents((prev) =>
        prev.map((event) =>
          event.id === selectedEvent.id
            ? { ...selectedEvent, ...eventData }
            : event
        )
      );
      toast.success("Event updated successfully!");
    } else {
      // Create new event
      const newEvent: CalendarEvent = {
        ...eventData,
        id: `event-${Date.now()}`,
      };
      setEvents((prev) => [...prev, newEvent]);
      toast.success("Event created successfully!");
    }

    setIsEventModalOpen(false);
    setSelectedEvent(null);
    setSelectedSlot(null);
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== eventId));
    toast.success("Event deleted successfully!");
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground text-sm">
            Manage your events and schedule
          </p>
        </div>
        <Button onClick={() => handleSelectSlot({ start: new Date(), end: new Date() })}>
          <Plus className="mr-2 h-4 w-4" />
          New Event
        </Button>
      </div>

      <div className="flex-1 min-h-[700px]">
        <CalendarViewComponent
          events={events}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
        />
      </div>

      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => {
          setIsEventModalOpen(false);
          setSelectedEvent(null);
          setSelectedSlot(null);
        }}
        event={selectedEvent}
        slotInfo={selectedSlot}
        onSubmit={handleEventSubmit}
        onDelete={handleDeleteEvent}
      />
    </div>
  );
}

