"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { RevenuePoint } from "@/lib/types/dashboard";

type LineChartProps = {
  data: RevenuePoint[];
};

export function RevenueLineChart({ data }: LineChartProps) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
      <header className="pb-3">
        <p className="text-sm text-muted-foreground">Growth velocity</p>
        <h3 className="text-lg font-semibold text-foreground">
          Pipeline conversion
        </h3>
      </header>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                borderRadius: "0.75rem",
                borderColor: "#e4e4e7",
              }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#f97316"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

