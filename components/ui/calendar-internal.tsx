"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, addMonths, subMonths, getDay } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface CalendarProps {
  mode?: "single" | "range";
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  disabled?: boolean;
  initialFocus?: boolean;
  fromDate?: Date;
  toDate?: Date;
  className?: string;
}

export function Calendar({
  mode = "single",
  selected,
  onSelect,
  disabled = false,
  initialFocus = false,
  fromDate,
  toDate,
  className,
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Get the day of the week for the first day of the month (0 = Sunday, 6 = Saturday)
  const firstDayOfWeek = getDay(monthStart);
  
  // Create empty cells for days before the first day of the month
  const emptyCells = Array.from({ length: firstDayOfWeek }, (_, i) => i);

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDateClick = (date: Date) => {
    if (disabled) return;
    
    // Check if date is within allowed range
    if (fromDate && date < fromDate) return;
    if (toDate && date > toDate) return;

    if (mode === "single") {
      const isSelected = selected && isSameDay(date, selected);
      onSelect?.(isSelected ? undefined : date);
    }
  };

  const isDateDisabled = (date: Date): boolean => {
    if (disabled) return true;
    if (fromDate && date < fromDate) return true;
    if (toDate && date > toDate) return true;
    return false;
  };

  const isDateSelected = (date: Date): boolean => {
    return selected ? isSameDay(date, selected) : false;
  };

  const isToday = (date: Date): boolean => {
    return isSameDay(date, new Date());
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className={cn("rounded-md border p-3", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={handlePrevMonth}
          disabled={disabled || (fromDate && subMonths(currentMonth, 1) < fromDate)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h3 className="font-semibold text-sm">
          {format(currentMonth, "MMMM yyyy")}
        </h3>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={handleNextMonth}
          disabled={disabled || (toDate && addMonths(currentMonth, 1) > toDate)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Week day headers */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-muted-foreground p-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-1">
        {/* Empty cells for days before month start */}
        {emptyCells.map((_, index) => (
          <div key={`empty-${index}`} className="aspect-square" />
        ))}

        {/* Days of the month */}
        {daysInMonth.map((date) => {
          const isDisabled = isDateDisabled(date);
          const isSelected = isDateSelected(date);
          const isTodayDate = isToday(date);

          return (
            <button
              key={date.toISOString()}
              type="button"
              onClick={() => handleDateClick(date)}
              disabled={isDisabled}
              className={cn(
                "aspect-square rounded-md text-sm transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isSelected &&
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                isTodayDate &&
                  !isSelected &&
                  "bg-accent text-accent-foreground font-semibold",
                isDisabled && "opacity-50 cursor-not-allowed hover:bg-transparent"
              )}
            >
              {format(date, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
}

