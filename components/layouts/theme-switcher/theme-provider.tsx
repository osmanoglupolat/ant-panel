"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const DEFAULT_THEME = "default";
const THEME_STORAGE_KEY = "app-theme";

export const AVAILABLE_THEMES = [
  { value: "default", label: "Default" },
  { value: "claude", label: "Claude" },
  { value: "violet-bloom", label: "Violet Bloom" },
  { value: "twitter", label: "Twitter" },
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
