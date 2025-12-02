export const settingsTabs = [
  { id: "general", label: "General" },
  { id: "team", label: "Team" },
  { id: "billing", label: "Billing" },
  { id: "security", label: "Security" },
] as const;

export type SettingsTab = (typeof settingsTabs)[number]["id"];

export function isSettingsTab(value: string): value is SettingsTab {
  return settingsTabs.some((tab) => tab.id === value);
}

