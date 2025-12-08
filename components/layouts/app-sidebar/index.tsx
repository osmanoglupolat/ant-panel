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
  IconChartPie,
  IconChevronRight,
  IconCreditCard,
  IconFileText,
  IconHome,
  IconLayoutDashboard,
  IconLayoutKanban,
  IconShoppingCart,
  IconSettings,
  IconShieldLock,
  IconUsers,
  IconWallet,
  IconX,
  IconPalette,
  IconTable,
  IconAlertCircle,
  IconBadge,
  IconClick,
  IconCards,
  IconPlayerPlay,
  IconChartLine,
  IconChevronDown,
  IconMenu2,
  IconEdit,
  IconIcons,
  IconForms,
  IconWindow,
  IconMessageCircle,
  IconTooltip,
  IconBell,
  IconArrowsSort,
  IconFile,
  IconUpload,
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
  subItems?: SidebarSubItem[];
}

interface SidebarSubItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  route?: string;
  hasSubItems?: boolean;
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
    icon: IconLayoutDashboard,
    hasSubItems: true,
    route: ROUTES.DASHBOARD_DEFAULT,
    subItems: [
      {
        id: "default",
        label: "Default",
        icon: IconHome,
        description: "Executive overview",
        route: ROUTES.DASHBOARD_DEFAULT,
      },
      {
        id: "analytics",
        label: "Analytics",
        icon: IconChartBar,
        description: "Analytics and insights",
        route: ROUTES.DASHBOARD_ANALYTICS,
      },
      {
        id: "ecommerce",
        label: "Ecommerce",
        icon: IconShoppingCart,
        description: "E-commerce metrics",
        route: ROUTES.DASHBOARD_ECOMMERCE,
      },
      {
        id: "crm",
        label: "CRM",
        icon: IconUsers,
        description: "Customer relationships",
        route: ROUTES.DASHBOARD_CRM,
      },
      {
        id: "finance",
        label: "Finance",
        icon: IconWallet,
        description: "Financial overview",
        route: ROUTES.DASHBOARD_FINANCE,
      },
    ],
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
    id: "blank-page",
    label: "Blank Page",
    icon: IconFile,
    hasSubItems: false,
    route: ROUTES.BLANK_PAGE,
  },
  {
    id: "ui",
    label: "UI",
    icon: IconPalette,
    hasSubItems: true,
    route: ROUTES.UI_FORMS_COMPONENTS,
    subItems: [
      {
        id: "forms",
        label: "Forms",
        icon: IconFileText,
        hasSubItems: true,
        subItems: [
          {
            id: "forms-components",
            label: "Components",
            icon: IconFileText,
            description: "Form components",
            route: ROUTES.UI_FORMS_COMPONENTS,
          },
          {
            id: "forms-layouts",
            label: "Layouts",
            icon: IconLayoutDashboard,
            description: "Form layouts",
            route: ROUTES.UI_FORMS_LAYOUTS,
          },
          {
            id: "forms-validation",
            label: "Validation",
            icon: IconAlertCircle,
            description: "Form validation",
            route: ROUTES.UI_FORMS_VALIDATION,
          },
          {
            id: "forms-wizard",
            label: "Wizard",
            icon: IconChevronRight,
            description: "Multi-step forms",
            route: ROUTES.UI_FORMS_WIZARD,
          },
        ],
      },
      {
        id: "data-tables",
        label: "Data Tables",
        icon: IconTable,
        hasSubItems: true,
        subItems: [
          {
            id: "data-tables-full",
            label: "Full Page UI",
            icon: IconTable,
            description: "Full page tables",
            route: ROUTES.UI_DATA_TABLES_FULL,
          },
          {
            id: "data-tables-scrollable",
            label: "Scrollable",
            icon: IconTable,
            description: "Scrollable tables",
            route: ROUTES.UI_DATA_TABLES_SCROLLABLE,
          },
        ],
      },
      {
        id: "components",
        label: "Components",
        icon: IconPalette,
        hasSubItems: true,
        subItems: [
          {
            id: "components-alerts",
            label: "Alerts",
            icon: IconAlertCircle,
            description: "Alert components",
            route: ROUTES.UI_COMPONENTS_ALERTS,
          },
          {
            id: "components-badges",
            label: "Badges",
            icon: IconBadge,
            description: "Badge components",
            route: ROUTES.UI_COMPONENTS_BADGES,
          },
          {
            id: "components-buttons",
            label: "Buttons",
            icon: IconClick,
            description: "Button variants",
            route: ROUTES.UI_COMPONENTS_BUTTONS,
          },
          {
            id: "components-cards",
            label: "Cards",
            icon: IconCards,
            description: "Card components",
            route: ROUTES.UI_COMPONENTS_CARDS,
          },
          {
            id: "components-carousel",
            label: "Carousel",
            icon: IconPlayerPlay,
            description: "Carousel slider",
            route: ROUTES.UI_COMPONENTS_CAROUSEL,
          },
          {
            id: "components-charts",
            label: "Charts",
            icon: IconChartLine,
            description: "Chart components",
            route: ROUTES.UI_COMPONENTS_CHARTS,
          },
          {
            id: "components-collapse",
            label: "Collapse",
            icon: IconChevronDown,
            description: "Collapsible content",
            route: ROUTES.UI_COMPONENTS_COLLAPSE,
          },
          {
            id: "components-dropdowns",
            label: "Dropdowns",
            icon: IconMenu2,
            description: "Dropdown menus",
            route: ROUTES.UI_COMPONENTS_DROPDOWNS,
          },
          {
            id: "components-editors",
            label: "Editors",
            icon: IconEdit,
            description: "Rich text editors",
            route: ROUTES.UI_COMPONENTS_EDITORS,
          },
          {
            id: "components-input-groups",
            label: "Input Groups",
            icon: IconForms,
            description: "Input group variants",
            route: ROUTES.UI_COMPONENTS_INPUT_GROUPS,
          },
          {
            id: "components-modal",
            label: "Modal",
            icon: IconWindow,
            description: "Modal dialogs",
            route: ROUTES.UI_COMPONENTS_MODAL,
          },
          {
            id: "components-popover",
            label: "Popover",
            icon: IconMessageCircle,
            description: "Popover components",
            route: ROUTES.UI_COMPONENTS_POPOVER,
          },
          {
            id: "components-tooltip",
            label: "Tooltip",
            icon: IconTooltip,
            description: "Tooltip components",
            route: ROUTES.UI_COMPONENTS_TOOLTIP,
          },
          {
            id: "components-toast",
            label: "Toast",
            icon: IconBell,
            description: "Toast notifications",
            route: ROUTES.UI_COMPONENTS_TOAST,
          },
          {
            id: "components-sortable",
            label: "Sortable",
            icon: IconArrowsSort,
            description: "Sortable lists",
            route: ROUTES.UI_COMPONENTS_SORTABLE,
          },
          {
            id: "components-file-upload",
            label: "File Upload",
            icon: IconUpload,
            description: "File upload component",
            route: ROUTES.UI_COMPONENTS_FILE_UPLOAD,
          },
        ],
      },
    ],
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
  const [selectedNestedSubItem, setSelectedNestedSubItem] = useState<string | null>(null);

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
          // Check if subItem has nested sub-items
          if (subItem.hasSubItems && subItem.subItems) {
            for (const nestedSubItem of subItem.subItems) {
              if (nestedSubItem.route && pathname === nestedSubItem.route) {
                setActiveItem(item.id);
                setSelectedSubItem(subItem.id);
                setSelectedNestedSubItem(nestedSubItem.id);
                return;
              }
            }
          } else if (subItem.route && pathname === subItem.route) {
            setActiveItem(item.id);
            setSelectedSubItem(subItem.id);
            setSelectedNestedSubItem(null);
            return;
          }
        }
        // Check if pathname starts with dashboard (for dashboard parent item)
        if (
          item.id === "dashboard" &&
          (pathname?.startsWith("/dashboard") || pathname === "/")
        ) {
          setActiveItem(item.id);
          // Find matching sub-item
          const matchingSubItem = item.subItems?.find(
            (subItem) => subItem.route === pathname
          );
          if (matchingSubItem) {
            setSelectedSubItem(matchingSubItem.id);
          } else if (pathname === "/" || pathname === ROUTES.DASHBOARD) {
            // Root path goes to default dashboard
            setSelectedSubItem("default");
          } else if (pathname?.startsWith("/dashboard/")) {
            // If path starts with /dashboard/ but no exact match, default to "default"
            setSelectedSubItem("default");
          }
          return;
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
        // Check if pathname starts with /ui (for UI parent item with nested structure)
        if (item.id === "ui" && pathname?.startsWith("/ui")) {
          setActiveItem(item.id);
          // Check nested sub-items
          for (const subItem of item.subItems || []) {
            if (subItem.hasSubItems && subItem.subItems) {
              const matchingNestedSubItem = subItem.subItems.find(
                (nestedSubItem) => nestedSubItem.route === pathname
              );
              if (matchingNestedSubItem) {
                setSelectedSubItem(subItem.id);
                setSelectedNestedSubItem(matchingNestedSubItem.id);
                return;
              }
            } else if (subItem.route === pathname) {
              setSelectedSubItem(subItem.id);
              setSelectedNestedSubItem(null);
              return;
            }
          }
          return;
        }
      }
    }
    // Default to dashboard if pathname is root
    if (pathname === "/" || pathname === ROUTES.DASHBOARD) {
      setActiveItem("dashboard");
      setSelectedSubItem("default");
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
                    const isSelectedSubItem = selectedSubItem === subItem.id;
                    const hasNestedItems = subItem.hasSubItems && subItem.subItems && subItem.subItems.length > 0;

                    return (
                      <div key={subItem.id}>
                        <SidebarMenuItem>
                          {subItem.route && !hasNestedItems ? (
                            <SidebarMenuButton
                              asChild
                              isActive={pathname === subItem.route}
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
                              isActive={isSelectedSubItem}
                              className="w-full justify-start gap-3 h-auto py-2 px-3"
                              onClick={() => {
                                setSelectedSubItem(isSelectedSubItem ? null : subItem.id);
                                setSelectedNestedSubItem(null);
                              }}
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
                              {hasNestedItems && (
                                <IconChevronRight
                                  className={cn(
                                    "h-4 w-4 transition-transform shrink-0",
                                    isSelectedSubItem && "rotate-90"
                                  )}
                                />
                              )}
                            </SidebarMenuButton>
                          )}
                        </SidebarMenuItem>
                        
                        {/* Nested sub-items (3rd level) */}
                        {hasNestedItems && isSelectedSubItem && (
                          <div className="ml-4 border-l border-border pl-2">
                            {subItem.subItems?.map((nestedSubItem) => {
                              const NestedIcon = nestedSubItem.icon;
                              const isSelectedNested = pathname === nestedSubItem.route;

                              return (
                                <SidebarMenuItem key={nestedSubItem.id}>
                                  {nestedSubItem.route && (
                                    <SidebarMenuButton
                                      asChild
                                      isActive={isSelectedNested}
                                      className="w-full justify-start gap-3 h-auto py-2 px-3"
                                    >
                                      <Link href={nestedSubItem.route}>
                                        <NestedIcon className="h-4 w-4 shrink-0 self-start mt-0.5" />
                                        <div className="flex-1 text-left min-w-0">
                                          <div className="text-sm font-medium">{nestedSubItem.label}</div>
                                          {nestedSubItem.description && (
                                            <div className="text-xs text-muted-foreground mt-0.5">
                                              {nestedSubItem.description}
                                            </div>
                                          )}
                                        </div>
                                      </Link>
                                    </SidebarMenuButton>
                                  )}
                                </SidebarMenuItem>
                              );
                            })}
                          </div>
                        )}
                      </div>
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
