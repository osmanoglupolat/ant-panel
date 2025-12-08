"use client";

import * as React from "react";
import { format } from "date-fns";
import { IconCalendar } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar-internal";

// Re-export Calendar for convenience
export { Calendar };

export interface DatePickerProps {
  /**
   * Selected date
   */
  date?: Date;
  /**
   * Callback when date changes
   */
  onDateChange?: (date: Date | undefined) => void;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Date format string (date-fns format)
   */
  dateFormat?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Minimum selectable date
   */
  minDate?: Date;
  /**
   * Maximum selectable date
   */
  maxDate?: Date;
  /**
   * Show time picker
   */
  showTime?: boolean;
}

export function DatePicker({
  date,
  onDateChange,
  placeholder = "Pick a date",
  dateFormat = "PPP",
  disabled = false,
  className,
  minDate,
  maxDate,
  showTime = false,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(date);
  const [timeValue, setTimeValue] = React.useState<string>(
    date && showTime
      ? `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`
      : "00:00"
  );

  React.useEffect(() => {
    setSelectedDate(date);
    if (date && showTime) {
      setTimeValue(
        `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`
      );
    }
  }, [date, showTime]);

  const handleDateSelect = (selected: Date | undefined) => {
    let finalDate = selected;
    if (selected && showTime) {
      const [hours, minutes] = timeValue.split(":").map(Number);
      finalDate = new Date(selected);
      finalDate.setHours(hours || 0);
      finalDate.setMinutes(minutes || 0);
    }

    setSelectedDate(finalDate);
    onDateChange?.(finalDate);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    setTimeValue(newTime);
    if (selectedDate) {
      const [hours, minutes] = newTime.split(":").map(Number);
      const newDate = new Date(selectedDate);
      newDate.setHours(hours || 0);
      newDate.setMinutes(minutes || 0);
      setSelectedDate(newDate);
      onDateChange?.(newDate);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !selectedDate && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <IconCalendar className="mr-2 h-4 w-4" />
          {selectedDate ? (
            format(selectedDate, showTime ? `${dateFormat} HH:mm` : dateFormat)
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-3">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            disabled={disabled}
            initialFocus
            {...(minDate && { fromDate: minDate })}
            {...(maxDate && { toDate: maxDate })}
          />
          {showTime && (
            <div className="mt-4 border-t pt-4">
              <label className="text-sm font-medium mb-2 block">Time</label>
              <Input
                type="time"
                value={timeValue}
                onChange={handleTimeChange}
                className="w-full"
              />
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

