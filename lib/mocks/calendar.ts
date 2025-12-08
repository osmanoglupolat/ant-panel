import type { CalendarEvent } from "@/lib/types/calendar";

export const calendarEvents: CalendarEvent[] = [
  {
    id: "event-1",
    title: "Team Standup",
    start: new Date(2024, 0, 15, 9, 0),
    end: new Date(2024, 0, 15, 9, 30),
    resource: {
      id: "team",
      name: "Team Meeting",
      color: "#3b82f6",
    },
    description: "Daily standup meeting with the development team",
  },
  {
    id: "event-2",
    title: "Client Presentation",
    start: new Date(2024, 0, 16, 14, 0),
    end: new Date(2024, 0, 16, 15, 30),
    resource: {
      id: "client",
      name: "Client Meeting",
      color: "#10b981",
    },
    location: "Conference Room A",
    attendees: [
      {
        id: "usr-1",
        name: "Sarah Tan",
        email: "sarah@antpanel.dev",
        avatar: "/avatars/shadcn.jpg",
      },
      {
        id: "usr-2",
        name: "Alex Chen",
        email: "alex@antpanel.dev",
        avatar: "/avatars/shadcn.jpg",
      },
    ],
  },
  {
    id: "event-3",
    title: "Code Review",
    start: new Date(2024, 0, 17, 10, 0),
    end: new Date(2024, 0, 17, 11, 0),
    resource: {
      id: "dev",
      name: "Development",
      color: "#8b5cf6",
    },
    description: "Review pull requests for dashboard features",
  },
  {
    id: "event-4",
    title: "Product Launch",
    start: new Date(2024, 0, 18, 11, 0),
    end: new Date(2024, 0, 18, 12, 0),
    allDay: false,
    resource: {
      id: "product",
      name: "Product",
      color: "#f59e0b",
    },
    location: "Main Hall",
  },
  {
    id: "event-5",
    title: "Sprint Planning",
    start: new Date(2024, 0, 19, 13, 0),
    end: new Date(2024, 0, 19, 15, 0),
    resource: {
      id: "team",
      name: "Team Meeting",
      color: "#3b82f6",
    },
    description: "Plan tasks for the next sprint",
  },
  {
    id: "event-6",
    title: "All Hands Meeting",
    start: new Date(2024, 0, 20, 10, 0),
    end: new Date(2024, 0, 20, 11, 30),
    resource: {
      id: "company",
      name: "Company",
      color: "#ef4444",
    },
    location: "Main Conference Room",
  },
];

