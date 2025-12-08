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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type BarChartProps = {
  data: ChannelBreakdown[];
  title?: string;
  description?: string;
};

export function ChannelBarChart({ 
  data, 
  title = "Contribution by acquisition",
  description = "Channel mix"
}: BarChartProps) {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardDescription>{description}</CardDescription>
        <CardTitle className="text-lg">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="h-56 pt-4">
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
      </CardContent>
    </Card>
  );
}

