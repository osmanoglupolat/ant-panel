import type { Metadata } from "next";

import { SettingsLayout } from "@/components/features/settings/layout";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your account settings, team members, billing information, and security preferences. Configure workspace settings and user permissions.",
};

export default function SettingsPage() {
  return <SettingsLayout />;
}

