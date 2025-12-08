/**
 * Calendar Types
 * Defines the structure for calendar events
 */

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  resource?: {
    id: string;
    name: string;
    color?: string;
  };
  description?: string;
  location?: string;
  attendees?: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  }[];
}

export type CalendarView = "month" | "week" | "day" | "agenda";

