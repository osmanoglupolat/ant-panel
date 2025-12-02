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
import { IconCheck } from "@tabler/icons-react";

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
    <div className="flex flex-col">
      {availableThemes.map((theme) => (
        <Button
          key={theme.value}
          variant="ghost"
          onClick={() => handleThemeChange(theme.value)}
          className="justify-between text-sm rounded-none px-4 w-full font-light"
        >
          {theme.label}
          <IconCheck
            className={cn(
              "size-4 opacity-0 transition-opacity duration-200",
              activeTheme === theme.value && "opacity-100"
            )}
          />
        </Button>
      ))}
    </div>
  );
}
