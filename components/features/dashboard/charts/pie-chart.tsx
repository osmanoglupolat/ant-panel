"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import type { SegmentShare } from "@/lib/types/dashboard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PieChartProps = {
  data: SegmentShare[];
};

const COLORS = ["#6366f1", "#0ea5e9", "#f97316", "#f43f5e"];

export function SegmentPieChart({ data }: PieChartProps) {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardDescription>Segments</CardDescription>
        <CardTitle className="text-lg">Revenue share by industry</CardTitle>
      </CardHeader>
      <CardContent className="h-56 pt-4">
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
      </CardContent>
    </Card>
  );
}

