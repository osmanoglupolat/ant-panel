"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import type { SegmentShare } from "@/lib/types/dashboard";

type PieChartProps = {
  data: SegmentShare[];
};

const COLORS = ["#6366f1", "#0ea5e9", "#f97316", "#f43f5e"];

export function SegmentPieChart({ data }: PieChartProps) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
      <header className="pb-3">
        <p className="text-sm text-muted-foreground">Segments</p>
        <h3 className="text-lg font-semibold text-foreground">
          Revenue share by industry
        </h3>
      </header>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="segment"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.segment}
                  fill={COLORS[index % COLORS.length]}
                  stroke="transparent"
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => `${value}%`}
              contentStyle={{
                borderRadius: "0.75rem",
                borderColor: "#e4e4e7",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

