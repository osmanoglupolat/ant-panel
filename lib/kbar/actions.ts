import type { Action } from "kbar";
import { navItems } from "./nav-items";

type NavigateTo = (url: string) => void;

export function buildNavigationActions(navigateTo: NavigateTo): Action[] {
  return navItems.flatMap((navItem) => {
    const baseAction: Action | null =
      navItem.url !== "#"
        ? {
            id: `${navItem.title.toLowerCase()}Action`,
            name: navItem.title,
            shortcut: navItem.shortcut,
            keywords: navItem.title.toLowerCase(),
            section: "Navigation",
            subtitle: `Go to ${navItem.title}`,
            perform: () => navigateTo(navItem.url),
          }
        : null;

    const childActions: Action[] =
      navItem.items?.map((childItem) => ({
        id: `${childItem.title.toLowerCase()}Action`,
        name: childItem.title,
        shortcut: childItem.shortcut,
        keywords: childItem.title.toLowerCase(),
        section: navItem.title,
        subtitle: `Go to ${childItem.title}`,
        perform: () => navigateTo(childItem.url),
      })) ?? [];

    return baseAction ? [baseAction, ...childActions] : childActions;
  });
}



