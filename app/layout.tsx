import type { Metadata } from "next";
import { Providers } from "./providers";
import { fontVariables } from "@/lib/font";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ant Panel - Modern Admin Dashboard",
    template: "%s | Ant Panel",
  },
  description:
    "A modern, feature-rich admin dashboard template built with Next.js 16, React 19, and Tailwind CSS. Perfect for building admin panels, SaaS dashboards, and internal tools.",
  keywords: [
    "admin dashboard",
    "admin panel",
    "dashboard template",
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "shadcn/ui",
  ],
  authors: [{ name: "Ant Panel Team" }],
  creator: "Ant Panel",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontVariables, "antialiased")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
