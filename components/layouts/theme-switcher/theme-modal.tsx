"use client";

import { useState } from "react";
import { IconWand } from "@tabler/icons-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { ThemeSelector } from "./theme-selector";
import { useThemeContext } from "./theme-provider";

export const ThemeModal = () => {
  const [open, setOpen] = useState(false);
  const { availableThemes } = useThemeContext();

  return (
    <>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        header="Theme Switcher"
      >
        <div className="flex flex-row items-center justify-between border-t px-4 pt-3 mb-2">
          <div className="text-sm text-muted-foreground">
            {availableThemes.length} themes available
          </div>
          <ThemeToggle />
        </div>
        <ThemeSelector type="list" />
      </Modal>
      <Button variant="secondary" size="icon" onClick={() => setOpen(true)}>
        <IconWand className="size-4" />
        <span className="sr-only">Theme Switcher</span>
      </Button>
    </>
  );
};
