import type { Action } from "kbar";
import { useRegisterActions } from "kbar";
import { useTheme } from "next-themes";
import { useMemo } from "react";

const useThemeSwitching = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const themeAction: Action[] = useMemo(
    () => [
      {
        id: "toggleTheme",
        name: "Toggle Theme",
        shortcut: ["t", "t"],
        section: "Theme",
        perform: toggleTheme
      },
      {
        id: "setLightTheme",
        name: "Set Light Theme",
        section: "Theme",
        perform: () => setTheme("light")
      },
      {
        id: "setDarkTheme",
        name: "Set Dark Theme",
        section: "Theme",
        perform: () => setTheme("dark")
      }
    ],
    [theme, setTheme]
  );

  useRegisterActions(themeAction, [themeAction]);
};

export default useThemeSwitching;
