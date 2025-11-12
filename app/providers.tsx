"use client";

import ThemeProvider from "@/components/layouts/theme-switcher/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
