"use client";

import { SettingsTab } from "../tabs";

import { GeneralSettings } from "./general";
import { TeamSettings } from "./team";
import { BillingSettings } from "./billing";
import { SecuritySettings } from "./security";

type SettingsTabsProps = {
  activeTab: SettingsTab;
};

export function SettingsTabs({ activeTab }: SettingsTabsProps) {
  if (activeTab === "team") {
    return <TeamSettings />;
  }
  if (activeTab === "billing") {
    return <BillingSettings />;
  }
  if (activeTab === "security") {
    return <SecuritySettings />;
  }
  return <GeneralSettings />;
}

