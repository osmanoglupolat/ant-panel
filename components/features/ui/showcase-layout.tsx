"use client";

import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ShowcaseLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function ShowcaseLayout({
  title,
  description,
  children,
}: ShowcaseLayoutProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      <div className="space-y-6">{children}</div>
    </div>
  );
}

type ShowcaseSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function ShowcaseSection({
  title,
  description,
  children,
}: ShowcaseSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

