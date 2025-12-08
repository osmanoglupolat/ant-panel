import { TrendingUp, TrendingDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { StatCard } from "@/lib/types/dashboard";
import { dashboardData } from "@/lib/mocks/dashboard";

interface StatCardsProps {
  stats?: StatCard[];
}

export function StatCards({ stats = dashboardData.stats }: StatCardsProps) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs">
      {stats.map((stat) => {
        const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
        const isPositive = stat.change.startsWith("+");

        return (
          <Card key={stat.id}>
            <CardHeader>
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {stat.value}
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <TrendIcon className="h-3 w-3" />
                  {stat.change}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {isPositive ? "Trending up" : "Trending down"} this period{" "}
                <TrendIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                {stat.label.toLowerCase()} metrics
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </section>
  );
}
