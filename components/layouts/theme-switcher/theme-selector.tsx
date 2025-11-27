"use client";

import { Button } from "@/components/ui/button";
import { useThemeContext } from "./theme-provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

export function ThemeSelector({
  type = "list",
}: {
  type?: "dropdown" | "list";
}) {
  const { activeTheme, setActiveTheme, availableThemes } = useThemeContext();

  const handleThemeChange = useCallback(
    (value: string) => {
      setActiveTheme(value);
    },
    [setActiveTheme]
  );

  if (type === "dropdown") {
    return (
      <Select value={activeTheme} onValueChange={handleThemeChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tema seçin" />
        </SelectTrigger>
        <SelectContent>
          {availableThemes.map((theme) => (
            <SelectItem key={theme.value} value={theme.value}>
              {theme.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }
  return (
    <div className="flex flex-col gap-0.5">
      {availableThemes.map((theme) => (
        <Button
          key={theme.value}
          variant="ghost"
          onClick={() => handleThemeChange(theme.value)}
          className={cn("justify-start text-sm hover:pl-9", activeTheme === theme.value && "bg-accent pl-9")}
        >
          {theme.label}
        </Button>
      ))}
    </div>
  );
}
