import type { Metadata } from "next";

import { SettingsLayout } from "@/components/features/settings/layout";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage team, billing, and security preferences.",
};

export default function SettingsPage() {
  return <SettingsLayout />;
}

