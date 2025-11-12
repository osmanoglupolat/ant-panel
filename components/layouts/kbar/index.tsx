"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from "kbar";
// components
import RenderResults from "./render-result";
// hooks
import useThemeSwitching from "./use-theme-switching";
// lib
import { buildNavigationActions } from "@/lib/kbar";

export default function KBar({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // These action are for the navigation
  const actions = useMemo(() => {
    const navigateTo = (url: string) => {
      router.push(url);
    };
    return buildNavigationActions(navigateTo);
  }, [router]);

  return (
    <KBarProvider actions={actions}>
      <KBarComponent>{children}</KBarComponent>
    </KBarProvider>
  );
}
const KBarComponent = ({ children }: { children: React.ReactNode }) => {
  useThemeSwitching();

  return (
    <>
      <KBarPortal>
        <KBarPositioner className="fixed inset-0 z-99999 bg-black/40 p-0!">
          <KBarAnimator className="bg-card text-card-foreground relative mt-64! w-full max-w-[500px] -translate-y-12! overflow-hidden rounded-lg border shadow-lg">
            <div className="bg-card border-border sticky top-0 z-10 border-b">
              <KBarSearch
                className="bg-card w-full border-none px-6 py-4 text-lg outline-hidden focus:ring-0 focus:ring-offset-0 focus:outline-hidden"
                placeholder="Type a command or search…"
                aria-label="Command search"
              />
            </div>
            <div className="max-h-[400px]">
              <RenderResults />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </>
  );
};
