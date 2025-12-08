"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

type Order = {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: "completed" | "pending" | "cancelled" | "processing";
  date: Date;
};

type RecentOrdersProps = {
  data: Order[];
  title?: string;
  description?: string;
};

const statusColors = {
  completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  pending: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  cancelled: "bg-red-500/10 text-red-600 dark:text-red-400",
  processing: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
};

export function RecentOrders({
  data,
  title = "Recent Orders",
  description = "Latest customer orders",
}: RecentOrdersProps) {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardDescription>{description}</CardDescription>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          {data.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between border-b pb-3 last:border-0"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-xs text-muted-foreground">{order.product}</p>
                  </div>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {format(order.date, "MMM d, h:mm a")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-sm font-medium">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(order.amount)}
                </p>
                <Badge variant="outline" className={statusColors[order.status]}>
                  {order.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

