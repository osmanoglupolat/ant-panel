import type { Action } from "kbar";
import { navItems } from "./nav-items";

type NavigateTo = (url: string) => void;

export function buildNavigationActions(navigateTo: NavigateTo): Action[] {
  return navItems.flatMap((navItem) => {
    const baseAction: Action = {
      id: `${navItem.title.toLowerCase().replace(/\s+/g, "-")}-action`,
      name: navItem.title,
      shortcut: navItem.shortcut,
      keywords: navItem.title.toLowerCase(),
      section: "Navigation",
      subtitle: `Go to ${navItem.title}`,
      perform: () => navigateTo(navItem.url),
    };

    const childActions: Action[] =
      navItem.items?.map((childItem) => ({
        id: `${childItem.title.toLowerCase().replace(/\s+/g, "-")}-action`,
        name: childItem.title,
        shortcut: childItem.shortcut,
        keywords: childItem.title.toLowerCase(),
        section: navItem.title,
        subtitle: `Go to ${childItem.title}`,
        perform: () => navigateTo(childItem.url),
      })) ?? [];

    return childActions.length > 0 ? childActions : [baseAction];
  });
}



