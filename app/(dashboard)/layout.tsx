import type { Metadata } from "next";

import { ProtectedRoute } from "@/components/auth/protected-route";
import KBar from "@/components/layouts/kbar";
import { AppSidebar } from "@/components/layouts/app-sidebar";
import { Header } from "@/components/layouts/app-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <KBar>
        <SidebarProvider className="bg-sidebar">
          <AppSidebar />
          <SidebarInset className="my-3 mr-3 rounded-xl shadow-md overflow-hidden">
            <Header />
            <section className="p-4 bg-background">{children}</section>
          </SidebarInset>
        </SidebarProvider>
      </KBar>
    </ProtectedRoute>
  );
}
