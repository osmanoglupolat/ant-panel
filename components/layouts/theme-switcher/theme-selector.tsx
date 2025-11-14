"use client";

import { useThemeContext } from "./theme-provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCallback } from "react";

export function ThemeSelector() {
  const { activeTheme, setActiveTheme, availableThemes } = useThemeContext();

  const handleThemeChange = useCallback(
    (value: string) => {
      setActiveTheme(value);
    },
    [setActiveTheme]
  );

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
