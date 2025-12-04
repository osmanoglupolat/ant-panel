"use client";

import ThemeProvider from "@/components/layouts/theme-switcher/theme-provider";
import { AuthProvider } from "@/lib/auth/auth-context";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        {children}
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  );
}
