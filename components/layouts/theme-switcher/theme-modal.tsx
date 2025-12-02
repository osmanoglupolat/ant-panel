"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { ThemeSelector } from "./theme-selector";
import { useThemeContext } from "./theme-provider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { WandSparkles } from "lucide-react";

export const ThemeModal = () => {
  const { availableThemes } = useThemeContext();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary" size="icon">
          <WandSparkles className="size-4 text-muted-foreground" strokeWidth={1.5} />
          <span className="sr-only">Theme Switcher</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex flex-row items-center justify-between border-t px-4 pt-3 mb-2">
          <div className="text-sm text-muted-foreground">
            {availableThemes.length} themes available
          </div>
          <ThemeToggle />
        </div>
        <ThemeSelector type="list" />
      </PopoverContent>
    </Popover>
  );
};
