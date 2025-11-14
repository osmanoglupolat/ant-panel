"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const DEFAULT_THEME = "default";
const THEME_STORAGE_KEY = "app-theme";

export const AVAILABLE_THEMES = [
  { value: "default", label: "Default", type: "default" },
  { value: "amber-minimal", label: "Amber Minimal", type: "default" },
  { value: "bold-tech", label: "Bold Tech", type: "bold-tech" },
  { value: "claude", label: "Claude", type: "default" },
  { value: "twitter", label: "Twitter", type: "default" },
  { value: "violet-bloom", label: "Violet Bloom", type: "default" },
  { value: "monospaced", label: "Mono", type: "monospaced" },
] as const;

type ThemeContextType = {
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
  availableThemes: typeof AVAILABLE_THEMES;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTheme, setActiveTheme] = useState<string>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme && AVAILABLE_THEMES.some((t) => t.value === savedTheme)) {
      setActiveTheme(savedTheme);
    }
  }, []);

  // Apply theme class to body
  useEffect(() => {
    if (!mounted) return;

    Array.from(document.body.classList)
      .filter((className) => className.startsWith("theme-"))
      .forEach((className) => {
        document.body.classList.remove(className);
      });
    document.body.classList.add(`theme-${activeTheme}`);
    if (activeTheme.endsWith("-scaled")) {
      document.body.classList.add("theme-scaled");
    }

    // Save to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, activeTheme);
  }, [activeTheme, mounted]);

  const handleSetActiveTheme = (theme: string) => {
    if (AVAILABLE_THEMES.some((t) => t.value === theme)) {
      setActiveTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        setActiveTheme: handleSetActiveTheme,
        availableThemes: AVAILABLE_THEMES,
      }}
    >
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within an ThemeProvider");
  }
  return context;
}
