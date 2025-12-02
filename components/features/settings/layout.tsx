"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import { SettingsTabs } from "./sections/tabs-section";
import { settingsTabs, isSettingsTab, type SettingsTab } from "./tabs";

export function SettingsLayout() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentTab = useMemo<SettingsTab>(() => {
    const tab = searchParams.get("tab");
    return tab && isSettingsTab(tab) ? tab : "general";
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    if (!isSettingsTab(value)) return;
    const params = new URLSearchParams(searchParams);
    params.set("tab", value);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Settings</p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Control center
          </h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Preview</Button>
          <Button>Save changes</Button>
        </div>
      </header>

      <Tabs value={currentTab} onValueChange={handleTabChange} className="space-y-6">
        <TabsList>
          {settingsTabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={cn(
                "rounded-xl px-4 py-2 text-sm",
                currentTab === tab.id && "bg-card shadow-sm"
              )}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={currentTab} className="space-y-6">
          <SettingsTabs activeTab={currentTab} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

