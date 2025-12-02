"use client";

import { Bell, ShieldCheck, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const notifications = [
  {
    id: "usage",
    icon: Zap,
    title: "Usage spike",
    detail: "API throughput +32% in the last hour.",
    time: "12m ago",
  },
  {
    id: "soc2",
    icon: ShieldCheck,
    title: "Compliance task",
    detail: "SOC 2 packet ready for review.",
    time: "1h ago",
  },
];

export function NotificationsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          aria-label="View notifications"
          className="relative"
        >
          <Bell className="size-4 text-muted-foreground" />
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-rose-500" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="border-b px-4 py-3">
          <p className="text-sm font-semibold text-foreground">Notifications</p>
          <p className="text-xs text-muted-foreground">
            Stay ahead of operational alerts.
          </p>
        </div>
        <div className="divide-y">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex gap-3 px-4 py-3">
              <span className="rounded-full bg-muted text-muted-foreground w-7 h-7 flex items-center justify-center">
                <notification.icon className="size-4" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {notification.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {notification.detail}
                </p>
                <span className="text-xs text-muted-foreground">
                  {notification.time}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 py-3">
          <Button variant="outline" size="sm" className="w-full">
            View all alerts
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

