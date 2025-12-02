"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { ChannelBreakdown } from "@/lib/types/dashboard";

type BarChartProps = {
  data: ChannelBreakdown[];
};

export function ChannelBarChart({ data }: BarChartProps) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
      <header className="pb-3">
        <p className="text-sm text-muted-foreground">Channel mix</p>
        <h3 className="text-lg font-semibold text-foreground">
          Contribution by acquisition
        </h3>
      </header>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="channel" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip
              formatter={(value: number) =>
                new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0,
                }).format(value)
              }
              contentStyle={{
                borderRadius: "0.75rem",
                borderColor: "#e4e4e7",
              }}
            />
            <Bar dataKey="amount" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

