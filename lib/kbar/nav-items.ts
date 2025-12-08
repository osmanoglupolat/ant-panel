import { ROUTES } from "@/lib/constants";

export const navItems = [
  {
    title: "Dashboard",
    url: ROUTES.DASHBOARD_DEFAULT,
    icon: "dashboard",
    isActive: false,
    shortcut: ["d"],
    items: [
      {
        title: "Default",
        url: ROUTES.DASHBOARD_DEFAULT,
        icon: "dashboard",
        shortcut: ["d", "d"],
      },
      {
        title: "Analytics",
        url: ROUTES.DASHBOARD_ANALYTICS,
        icon: "analytics",
        shortcut: ["d", "a"],
      },
      {
        title: "Ecommerce",
        url: ROUTES.DASHBOARD_ECOMMERCE,
        icon: "ecommerce",
        shortcut: ["d", "e"],
      },
      {
        title: "CRM",
        url: ROUTES.DASHBOARD_CRM,
        icon: "crm",
        shortcut: ["d", "c"],
      },
      {
        title: "Finance",
        url: ROUTES.DASHBOARD_FINANCE,
        icon: "finance",
        shortcut: ["d", "f"],
      },
    ],
  },
  {
    title: "Users",
    url: ROUTES.USERS,
    icon: "users",
    isActive: false,
    shortcut: ["u"],
    items: [],
  },
  {
    title: "Kanban",
    url: ROUTES.KANBAN,
    icon: "kanban",
    isActive: false,
    shortcut: ["k"],
    items: [],
  },
  {
    title: "Calendar",
    url: ROUTES.CALENDAR,
    icon: "calendar",
    isActive: false,
    shortcut: ["c"],
    items: [],
  },
  {
    title: "Forms",
    url: ROUTES.FORMS,
    icon: "form",
    isActive: false,
    shortcut: ["f"],
    items: [],
  },
  {
    title: "Settings",
    url: ROUTES.SETTINGS,
    icon: "settings",
    isActive: false,
    shortcut: ["s"],
    items: [
      {
        title: "General",
        url: ROUTES.SETTINGS_GENERAL,
        icon: "settings",
        shortcut: ["s", "g"],
      },
      {
        title: "Team",
        url: ROUTES.SETTINGS_TEAM,
        icon: "users",
        shortcut: ["s", "t"],
      },
      {
        title: "Billing",
        url: ROUTES.SETTINGS_BILLING,
        icon: "billing",
        shortcut: ["s", "b"],
      },
      {
        title: "Security",
        url: ROUTES.SETTINGS_SECURITY,
        icon: "lock",
        shortcut: ["s", "s"],
      },
    ],
  },
];
