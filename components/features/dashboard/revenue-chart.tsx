"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { RevenuePoint } from "@/lib/types/dashboard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type RevenueChartProps = {
  data: RevenuePoint[];
};

const currencyFormatter = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-0">
        <div>
          <CardDescription>Revenue trend</CardDescription>
          <CardTitle className="text-2xl">
            $110.8k{" "}
            <span className="text-sm font-medium text-emerald-500">+12.6%</span>
          </CardTitle>
        </div>
        <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          Last 7 months
        </span>
      </CardHeader>
      <CardContent className="h-64 pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              stroke="#A1A1AA"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              stroke="#A1A1AA"
              tickFormatter={currencyFormatter}
            />
            <Tooltip
              formatter={(value: number) => currencyFormatter(value)}
              labelStyle={{ color: "#71717a" }}
              contentStyle={{
                borderRadius: "0.75rem",
                borderColor: "#e4e4e7",
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#6366f1"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#revenueGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
