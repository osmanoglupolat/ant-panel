"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  IconCalendar,
  IconChartBar,
  IconChevronRight,
  IconCreditCard,
  IconFileText,
  IconHome,
  IconLayoutKanban,
  IconSettings,
  IconShieldLock,
  IconUsers,
  IconX,
} from "@tabler/icons-react";
import { TeamSwitcher } from "@/components/layouts/team-switcher";
import { NavUser } from "../nav-user";
import { ROUTES } from "@/lib/constants";
import { dashboardData } from "@/lib/mocks/dashboard";

// Get user from dashboard data (first user as current user for demo)
const currentUser = dashboardData.users[0] || {
  name: "Admin User",
  email: "admin@antpanel.dev",
  avatar: "/avatars/shadcn.jpg",
};

const data = {
  user: {
    name: currentUser.name,
    email: currentUser.email,
    avatar: currentUser.avatar || "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Ant Panel",
      logo: IconHome,
      plan: "Pro",
    },
  ],
};

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  hasSubItems?: boolean;
  route?: string;
  subItems?: {
    id: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    description?: string;
    route?: string;
  }[];
}

const sidebarItems: SidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: IconHome,
    hasSubItems: false,
    route: ROUTES.DASHBOARD,
  },
  {
    id: "users",
    label: "Users",
    icon: IconUsers,
    hasSubItems: false,
    route: ROUTES.USERS,
  },
  {
    id: "kanban",
    label: "Kanban",
    icon: IconLayoutKanban,
    hasSubItems: false,
    route: ROUTES.KANBAN,
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: IconCalendar,
    hasSubItems: false,
    route: ROUTES.CALENDAR,
  },
  {
    id: "forms",
    label: "Forms",
    icon: IconFileText,
    hasSubItems: false,
    route: ROUTES.FORMS,
  },
  {
    id: "settings",
    label: "Settings",
    icon: IconSettings,
    hasSubItems: true,
    route: ROUTES.SETTINGS,
    subItems: [
      {
        id: "general",
        label: "General",
        icon: IconSettings,
        description: "General account settings",
        route: ROUTES.SETTINGS_GENERAL,
      },
      {
        id: "team",
        label: "Team",
        icon: IconUsers,
        description: "Team members and roles",
        route: ROUTES.SETTINGS_TEAM,
      },
      {
        id: "billing",
        label: "Billing",
        icon: IconCreditCard,
        description: "Billing and subscription",
        route: ROUTES.SETTINGS_BILLING,
      },
      {
        id: "security",
        label: "Security",
        icon: IconShieldLock,
        description: "Security and password settings",
        route: ROUTES.SETTINGS_SECURITY,
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<string | null>(null);

  // Determine active item based on pathname
  useEffect(() => {
    // Check if pathname matches any route
    for (const item of sidebarItems) {
      if (item.route && pathname === item.route) {
        setActiveItem(item.id);
        setSelectedSubItem(null);
        return;
      }
      if (item.hasSubItems && item.subItems) {
        for (const subItem of item.subItems) {
          if (subItem.route && pathname === subItem.route) {
            setActiveItem(item.id);
            setSelectedSubItem(subItem.id);
            return;
          }
        }
        // Check if pathname starts with settings (for settings parent item)
        if (item.id === "settings" && pathname?.startsWith("/settings")) {
          setActiveItem(item.id);
          // Find matching sub-item
          const matchingSubItem = item.subItems?.find(
            (subItem) => subItem.route === pathname
          );
          if (matchingSubItem) {
            setSelectedSubItem(matchingSubItem.id);
          }
          return;
        }
      }
    }
    // Default to dashboard if pathname is root
    if (pathname === "/") {
      setActiveItem("dashboard");
      setSelectedSubItem(null);
    }
  }, [pathname]);

  const activeItemData = sidebarItems.find((item) => item.id === activeItem);

  const handleItemClick = (item: SidebarItem) => {
    if (item.hasSubItems) {
      const isActive = activeItem === item.id;
      setActiveItem(isActive ? null : item.id);
      if (isActive) {
        setSelectedSubItem(null);
      }
    }
    // Navigation is handled by Link component
  };

  const handleSubItemClick = () => {
    // Navigation is handled by Link component
  };

  return (
    <div className="flex h-screen bg-background sticky top-0">
      <Sidebar
        side="left"
        variant="sidebar"
        collapsible="icon"
        className="w-64 border-none!"
        {...props}
      >
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeItem === item.id;
                  const chevronIndicator = (
                    <IconChevronRight
                      className={cn(
                        "h-4 w-4 transition-transform shrink-0",
                        isActive && "rotate-90"
                      )}
                    />
                  );

                  // Check if current route is active
                  const isRouteActive =
                    (item.route && pathname === item.route) ||
                    (item.hasSubItems &&
                      pathname?.startsWith(item.route || ""));

                  return (
                    <SidebarMenuItem key={item.id}>
                      {item.route && !item.hasSubItems ? (
                        <SidebarMenuButton
                          asChild
                          isActive={isRouteActive}
                          className="w-full h-10 px-3"
                        >
                          <Link href={item.route}>
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <Icon className="h-4 w-4 shrink-0" />
                              <span className="truncate">{item.label}</span>
                            </div>
                          </Link>
                        </SidebarMenuButton>
                      ) : (
                        <SidebarMenuButton
                          isActive={isActive}
                          className="w-full h-10 px-3"
                          onClick={() => handleItemClick(item)}
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <Icon className="h-4 w-4 shrink-0" />
                            <span className="truncate">{item.label}</span>
                          </div>
                          <div className="flex items-center gap-1 shrink-0 ml-auto min-w-fit">
                            {item.hasSubItems && chevronIndicator}
                          </div>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>

      {activeItem && activeItemData?.subItems && (
        <Sidebar
          side="left"
          variant="sidebar"
          collapsible="none"
          className="w-64 animate-in slide-in-from-left-5 duration-200 border-l"
        >
          <SidebarHeader className="flex flex-row items-center justify-between border-b px-4 py-4">
            <h3 className="font-medium">{activeItemData.label}</h3>
            <button
              onClick={() => setActiveItem(null)}
              className="h-6 w-6 p-0 rounded-md hover:bg-sidebar-accent flex items-center justify-center"
            >
              <IconX className="h-4 w-4" />
            </button>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {activeItemData.subItems.map((subItem) => {
                    const SubIcon = subItem.icon;
                    const isSelected = pathname === subItem.route;

                    return (
                      <SidebarMenuItem key={subItem.id}>
                        {subItem.route ? (
                          <SidebarMenuButton
                            asChild
                            isActive={isSelected}
                            className="w-full justify-start gap-3 h-auto py-2 px-3"
                          >
                            <Link href={subItem.route}>
                              <SubIcon className="h-5 w-5 shrink-0 self-start mt-0.5" />
                              <div className="flex-1 text-left min-w-0">
                                <div className="font-medium">{subItem.label}</div>
                                {subItem.description && (
                                  <div className="text-xs text-muted-foreground mt-0.5">
                                    {subItem.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          </SidebarMenuButton>
                        ) : (
                          <SidebarMenuButton
                            isActive={isSelected}
                            className="w-full justify-start gap-3 h-auto py-2 px-3"
                          >
                            <SubIcon className="h-5 w-5 shrink-0 self-start mt-0.5" />
                            <div className="flex-1 text-left min-w-0">
                              <div className="font-medium">{subItem.label}</div>
                              {subItem.description && (
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  {subItem.description}
                                </div>
                              )}
                            </div>
                          </SidebarMenuButton>
                        )}
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      )}
    </div>
  );
}
