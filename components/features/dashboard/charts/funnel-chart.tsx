"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type FunnelData = {
  stage: string;
  value: number;
};

type FunnelChartProps = {
  data: FunnelData[];
  title?: string;
  description?: string;
};

export function FunnelChart({
  data,
  title = "Conversion Funnel",
  description = "Funnel stages",
}: FunnelChartProps) {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardDescription>{description}</CardDescription>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-64 pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
          >
            <XAxis type="number" axisLine={false} tickLine={false} />
            <YAxis
              dataKey="stage"
              type="category"
              axisLine={false}
              tickLine={false}
              width={70}
            />
            <Tooltip
              formatter={(value: number) => value.toLocaleString()}
              contentStyle={{
                borderRadius: "0.75rem",
                borderColor: "#e4e4e7",
              }}
            />
            <Bar
              dataKey="value"
              fill="#6366f1"
              radius={[0, 8, 8, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

