"use client";

import { CreditCard, Download, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const usageMetrics = [
  { id: "api", label: "API Requests", current: 8543, limit: 10_000 },
  { id: "syncs", label: "Monthly Syncs", current: 143, limit: 200 },
];

const invoices = [
  { id: "INV-001", date: "Mar 1, 2024", amount: "$29.00", status: "Paid" },
  { id: "INV-002", date: "Feb 1, 2024", amount: "$29.00", status: "Paid" },
  { id: "INV-003", date: "Jan 1, 2024", amount: "$29.00", status: "Paid" },
];

export function BillingSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-0">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-muted/60 p-3 text-muted-foreground">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <CardTitle className="text-xl">Pro Plan</CardTitle>
                  <Badge variant="secondary" className="rounded-full text-xs">
                    Current Plan
                  </Badge>
                </div>
                <CardDescription>
                  $29/month • Renews on April 1, 2024
                </CardDescription>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Change Plan</Button>
              <Button variant="destructive">Cancel Plan</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          {usageMetrics.map((metric) => {
            const percent = Math.min(
              Math.round((metric.current / metric.limit) * 100),
              100
            );
            return (
              <div key={metric.id} className="space-y-2">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{metric.label}</span>
                  <span className="font-medium text-foreground">
                    {metric.current.toLocaleString()} /{" "}
                    {metric.limit.toLocaleString()}
                  </span>
                </div>
                <Progress value={percent} className="h-2 rounded-full" />
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-0">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-muted/60 p-3 text-muted-foreground">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <CardDescription>Payment Method</CardDescription>
                <CardTitle className="text-base font-medium">
                  Visa ending in 4242
                </CardTitle>
              </div>
            </div>
            <Button variant="outline">Update Payment Method</Button>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader className="pb-0">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <CardDescription>Billing History</CardDescription>
              <CardTitle className="text-lg">Recent invoices</CardTitle>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Download All
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 pt-6">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex items-center justify-between rounded-2xl border border-border/60 px-4 py-3 text-sm"
            >
              <div>
                <p className="font-medium text-foreground">{invoice.id}</p>
                <p className="text-muted-foreground">{invoice.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">
                  {invoice.status}
                </span>
                <p className="font-semibold text-foreground">{invoice.amount}</p>
                <button
                  aria-label={`Download ${invoice.id}`}
                  className="rounded-full border border-border/60 p-2 text-muted-foreground transition hover:text-foreground"
                >
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

