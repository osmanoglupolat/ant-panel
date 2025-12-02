"use client";

import { useTheme } from "next-themes";
import { IconBrightness, IconMoon } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeToggle = useCallback(
    (e?: React.MouseEvent) => {
      const newMode = resolvedTheme === "dark" ? "light" : "dark";
      const root = document.documentElement;

      if (!document.startViewTransition) {
        setTheme(newMode);
        return;
      }

      // Set coordinates from the click event
      if (e) {
        root.style.setProperty("--x", `${e.clientX}px`);
        root.style.setProperty("--y", `${e.clientY}px`);
      }

      document.startViewTransition(() => {
        setTheme(newMode);
      });
    },
    [resolvedTheme, setTheme]
  );

  return (
    <Button
      variant="ghost"
      size="icon"
      className="group/toggle size-8 text-muted-foreground"
      onClick={handleThemeToggle}
    >
      {resolvedTheme === "dark" ? (
        <IconBrightness className="size-4.5" />
      ) : (
        <IconMoon className="size-4.5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
