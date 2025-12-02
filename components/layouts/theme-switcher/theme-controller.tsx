"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { ThemeSelector } from "./theme-selector";
import { AVAILABLE_THEMES, useThemeContext } from "./theme-provider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { WandSparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { IconArrowsShuffle, IconSearch } from "@tabler/icons-react";
import { useCallback, useState } from "react";

export const ThemeController = () => {
  const [search, setSearch] = useState("");
  const { availableThemes, setActiveTheme, filterAvailableThemes } =
    useThemeContext();

  const switchRandomTheme = useCallback(() => {
    const randomTheme =
      availableThemes[Math.floor(Math.random() * availableThemes.length)];
    setActiveTheme(randomTheme.value);
  }, [availableThemes]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary" size="icon">
          <WandSparkles
            className="size-4 text-muted-foreground"
            strokeWidth={1.5}
          />
          <span className="sr-only">Theme Switcher</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex flex-row items-center justify-start py-1">
          <IconSearch className="ml-3 h-4.5 w-4.5 text-muted-foreground" />
          <Input
            placeholder="Search themes..."
            className="w-full border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
            onChange={(event) => {
              setSearch(event.target.value);
              filterAvailableThemes(event.target.value);
            }}
            value={search}
          />
        </div>
        <div className="flex flex-row items-center justify-between border-t border-b px-3 py-1">
          <div className="text-sm text-muted-foreground">
            {availableThemes.length} themes available
          </div>
          <div className="">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="group/toggle size-8 text-muted-foreground"
              onClick={switchRandomTheme}
            >
              <IconArrowsShuffle className="size-4.5" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
        <ThemeSelector type="list" />
      </PopoverContent>
    </Popover>
  );
};
