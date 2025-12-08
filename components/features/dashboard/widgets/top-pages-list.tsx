"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

type TopPage = {
  path: string;
  views: number;
  uniqueViews: number;
  avgTime: string;
  bounceRate: string;
};

type TopPagesListProps = {
  data: TopPage[];
  title?: string;
  description?: string;
};

export function TopPagesList({
  data,
  title = "Top Pages",
  description = "Most visited pages",
}: TopPagesListProps) {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardDescription>{description}</CardDescription>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          {data.map((page, index) => (
            <div
              key={page.path}
              className="flex items-center justify-between border-b pb-3 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                  {index + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{page.path}</p>
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {page.views.toLocaleString()} views • {page.uniqueViews.toLocaleString()} unique
                  </p>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="font-medium">{page.avgTime}</p>
                <p className="text-xs text-muted-foreground">{page.bounceRate} bounce</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

