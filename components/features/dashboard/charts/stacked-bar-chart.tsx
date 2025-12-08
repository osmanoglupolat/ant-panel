"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type StackedBarData = {
  name: string;
  [key: string]: string | number;
};

type StackedBarChartProps = {
  data: StackedBarData[];
  title?: string;
  description?: string;
  keys: string[];
  colors?: string[];
};

const DEFAULT_COLORS = ["#6366f1", "#0ea5e9", "#f97316", "#f43f5e"];

export function StackedBarChart({
  data,
  title = "Stacked Comparison",
  description = "Breakdown by category",
  keys,
  colors = DEFAULT_COLORS,
}: StackedBarChartProps) {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardDescription>{description}</CardDescription>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-64 pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                borderRadius: "0.75rem",
                borderColor: "#e4e4e7",
              }}
            />
            <Legend />
            {keys.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                stackId="a"
                fill={colors[index % colors.length]}
                radius={index === keys.length - 1 ? [8, 8, 0, 0] : 0}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

