"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type PipelineStage = {
  stage: string;
  count: number;
  value: number;
  percentage: number;
};

type PipelineStagesProps = {
  data: PipelineStage[];
  title?: string;
  description?: string;
};

export function PipelineStages({
  data,
  title = "Pipeline Stages",
  description = "Deals by stage",
}: PipelineStagesProps) {
  const totalValue = data.reduce((sum, stage) => sum + stage.value, 0);

  return (
    <Card>
      <CardHeader className="pb-0">
        <CardDescription>{description}</CardDescription>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-6">
          {data.map((stage) => (
            <div key={stage.stage} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{stage.stage}</span>
                  <span className="text-muted-foreground">({stage.count} deals)</span>
                </div>
                <span className="font-medium">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    notation: "compact",
                  }).format(stage.value)}
                </span>
              </div>
              <Progress value={stage.percentage} className="h-2" />
              <p className="text-xs text-muted-foreground">{stage.percentage}% of total</p>
            </div>
          ))}
          <div className="mt-4 border-t pt-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Total Pipeline Value</span>
              <span className="text-lg font-semibold">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  notation: "compact",
                }).format(totalValue)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

