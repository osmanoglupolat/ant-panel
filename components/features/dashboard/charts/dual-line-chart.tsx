"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type DualLineData = {
  date: string;
  value1: number;
  value2: number;
};

type DualLineChartProps = {
  data: DualLineData[];
  title?: string;
  description?: string;
  label1?: string;
  label2?: string;
  formatter?: (value: number) => string;
};

export function DualLineChart({
  data,
  title = "Comparison Chart",
  description = "Trend comparison",
  label1 = "Series 1",
  label2 = "Series 2",
  formatter = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
    }).format(value),
}: DualLineChartProps) {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardDescription>{description}</CardDescription>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-64 pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} tickFormatter={formatter} />
            <Tooltip
              formatter={(value: number) => formatter(value)}
              contentStyle={{
                borderRadius: "0.75rem",
                borderColor: "#e4e4e7",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="value1"
              stroke="#6366f1"
              strokeWidth={3}
              dot={false}
              name={label1}
            />
            <Line
              type="monotone"
              dataKey="value2"
              stroke="#f97316"
              strokeWidth={3}
              dot={false}
              name={label2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

