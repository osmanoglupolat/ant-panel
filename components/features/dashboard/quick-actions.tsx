"use client";

import { ArrowUpRight, Calendar, MailPlus, Share2 } from "lucide-react";

import type { QuickAction } from "@/lib/types/dashboard";

type QuickActionsProps = {
  actions: QuickAction[];
};

const icons = [Share2, MailPlus, Calendar];

export function QuickActions({ actions }: QuickActionsProps) {
  return (
    <section className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
      <header className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Quick actions</p>
          <h2 className="text-lg font-semibold text-foreground">
            Keep work moving
          </h2>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
      </header>
      <div className="space-y-3">
        {actions.map((action, index) => {
          const ActionIcon = icons[index] ?? Share2;
          return (
            <button
              key={action.id}
              className="flex w-full items-center justify-between rounded-xl border border-border/70 px-4 py-3 text-left transition hover:border-foreground/20 hover:bg-muted/40"
            >
              <div>
                <p className="font-medium text-foreground">{action.title}</p>
                <p className="text-sm text-muted-foreground">
                  {action.description}
                </p>
              </div>
              <span className="rounded-full bg-muted p-2 text-muted-foreground">
                <ActionIcon className="h-4 w-4" />
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}


