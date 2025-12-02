"use client";

import { ArrowUpRight, Calendar, MailPlus, Share2 } from "lucide-react";

import type { QuickAction } from "@/lib/types/dashboard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type QuickActionsProps = {
  actions: QuickAction[];
};

const icons = [Share2, MailPlus, Calendar];

export function QuickActions({ actions }: QuickActionsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-0">
        <div>
          <CardDescription>Quick actions</CardDescription>
          <CardTitle className="text-lg">Keep work moving</CardTitle>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-3 pt-6">
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
      </CardContent>
    </Card>
  );
}





