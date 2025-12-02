"use client";

import { BellRing, ShieldCheck, Zap } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const notifications = [
  {
    id: "usage",
    icon: Zap,
    title: "Usage threshold",
    description: "API quota at 82%. Plan for scale up.",
    time: "12m ago",
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Security review passed",
    description: "SOC 2 Type II readiness complete.",
    time: "1h ago",
  },
  {
    id: "release",
    icon: BellRing,
    title: "Release window scheduled",
    description: "v3.9 ships to production tonight.",
    time: "3h ago",
  },
];

export function NotificationsPanel() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-0">
        <div>
          <CardDescription>Notifications</CardDescription>
          <CardTitle className="text-lg">Operational alerts</CardTitle>
        </div>
        <button className="text-sm font-medium text-primary underline-offset-4 hover:underline">
          Manage
        </button>
      </CardHeader>
      <CardContent className="space-y-3 pt-6">
        {notifications.map((notification) => (
          <article
            key={notification.id}
            className="flex items-start gap-3 rounded-xl border border-border/60 px-3 py-3"
          >
            <span className="rounded-full bg-muted p-2 text-muted-foreground">
              <notification.icon className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <p className="font-medium text-foreground">{notification.title}</p>
              <p className="text-sm text-muted-foreground">
                {notification.description}
              </p>
              <span className="text-xs text-muted-foreground">
                {notification.time}
              </span>
            </div>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}

