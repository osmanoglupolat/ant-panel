"use client";

import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ShowcaseLayoutProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function ShowcaseLayout({ title, description, children }: ShowcaseLayoutProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
}

type ShowcaseSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function ShowcaseSection({ title, description, children }: ShowcaseSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
}

