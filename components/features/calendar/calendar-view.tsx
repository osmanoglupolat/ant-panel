"use client";

import { useState } from "react";
import { Calendar, View, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CalendarEvent, CalendarView } from "@/lib/types/calendar";
import { cn } from "@/lib/utils";

// Create a localizer using date-fns
// react-big-calendar provides dateFnsLocalizer which handles all required methods
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: {
    "en-US": enUS,
  },
});

type CalendarViewProps = {
  events: CalendarEvent[];
  onSelectEvent?: (event: CalendarEvent) => void;
  onSelectSlot?: (slotInfo: { start: Date; end: Date }) => void;
  className?: string;
};

export function CalendarViewComponent({
  events,
  onSelectEvent,
  onSelectSlot,
  className,
}: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<View>("month");

  const handleNavigate = (action: "PREV" | "NEXT" | "TODAY") => {
    if (action === "PREV") {
      if (view === "month") {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
      } else if (view === "week") {
        setCurrentDate(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000));
      } else {
        setCurrentDate(new Date(currentDate.getTime() - 24 * 60 * 60 * 1000));
      }
    } else if (action === "NEXT") {
      if (view === "month") {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
      } else if (view === "week") {
        setCurrentDate(new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000));
      } else {
        setCurrentDate(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000));
      }
    } else {
      setCurrentDate(new Date());
    }
  };

  const eventStyleGetter = (event: CalendarEvent) => {
    const color = event.resource?.color || "#3b82f6";
    return {
      style: {
        backgroundColor: color,
        borderColor: color,
        color: "#fff",
        borderRadius: "4px",
        border: "none",
        padding: "2px 4px",
      },
    };
  };

  return (
    <div className={cn("flex h-full flex-col space-y-4", className)}>
      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleNavigate("PREV")}
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleNavigate("TODAY")}
            aria-label="Today"
          >
            Today
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleNavigate("NEXT")}
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <h2 className="ml-4 text-lg font-semibold">
            {view === "month" &&
              format(currentDate, "MMMM yyyy", { locale: enUS })}
            {view === "week" &&
              `Week of ${format(currentDate, "MMM d", { locale: enUS })}`}
            {view === "day" && format(currentDate, "EEEE, MMMM d, yyyy", { locale: enUS })}
            {view === "agenda" && "Agenda"}
          </h2>
        </div>
        <Select
          value={view}
          onValueChange={(value) => setView(value as View)}
        >
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="month">Month</SelectItem>
            <SelectItem value="week">Week</SelectItem>
            <SelectItem value="day">Day</SelectItem>
            <SelectItem value="agenda">Agenda</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Calendar */}
      <div className="flex-1 rounded-lg border bg-card">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%", padding: "16px" }}
          view={view}
          onView={setView}
          date={currentDate}
          onNavigate={setCurrentDate}
          onSelectEvent={onSelectEvent}
          onSelectSlot={onSelectSlot}
          selectable
          eventPropGetter={eventStyleGetter}
          popup
        />
      </div>
    </div>
  );
}

