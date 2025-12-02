"use client";

import { BellRing, ShieldCheck, Zap } from "lucide-react";

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
    <section className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
      <header className="flex items-center justify-between pb-4">
        <div>
          <p className="text-sm text-muted-foreground">Notifications</p>
          <h2 className="text-lg font-semibold text-foreground">
            Operational alerts
          </h2>
        </div>
        <button className="text-sm font-medium text-primary underline-offset-4 hover:underline">
          Manage
        </button>
      </header>
      <div className="space-y-3">
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
      </div>
    </section>
  );
}

