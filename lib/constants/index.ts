/**
 * Centralized Constants
 * 
 * This file contains all application-wide constants.
 * Organize constants by feature/domain for better maintainability.
 */

// Application Info
export const APP_NAME = "Ant Panel";
export const APP_DESCRIPTION = "Modern Admin Dashboard Template";
export const APP_VERSION = "1.0.0";

// Route paths
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  DASHBOARD: "/",
  DASHBOARD_DEFAULT: "/dashboard/default",
  DASHBOARD_ANALYTICS: "/dashboard/analytics",
  DASHBOARD_ECOMMERCE: "/dashboard/ecommerce",
  DASHBOARD_CRM: "/dashboard/crm",
  DASHBOARD_FINANCE: "/dashboard/finance",
  SETTINGS: "/settings",
  SETTINGS_GENERAL: "/settings",
  SETTINGS_TEAM: "/settings/team",
  SETTINGS_BILLING: "/settings/billing",
  SETTINGS_SECURITY: "/settings/security",
  USERS: "/users",
  KANBAN: "/kanban",
  CALENDAR: "/calendar",
  FORMS: "/forms",
} as const;

// User roles
export const USER_ROLES = {
  OWNER: "Owner",
  ADMIN: "Admin",
  EDITOR: "Editor",
  VIEWER: "Viewer",
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

// User statuses
export const USER_STATUSES = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  INVITED: "invited",
  DISABLED: "disabled",
} as const;

export type UserStatus = (typeof USER_STATUSES)[keyof typeof USER_STATUSES];

// Task statuses (Kanban)
export const TASK_STATUSES = {
  TODO: "todo",
  IN_PROGRESS: "in-progress",
  REVIEW: "review",
  DONE: "done",
} as const;

export type TaskStatus = (typeof TASK_STATUSES)[keyof typeof TASK_STATUSES];

// Task priorities
export const TASK_PRIORITIES = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
} as const;

export type TaskPriority = (typeof TASK_PRIORITIES)[keyof typeof TASK_PRIORITIES];

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 20, 30, 50, 100],
  MAX_PAGE_SIZE: 100,
} as const;

// Date formats
export const DATE_FORMATS = {
  SHORT: "MMM d, yyyy",
  LONG: "MMMM d, yyyy",
  WITH_TIME: "MMM d, yyyy 'at' h:mm a",
  ISO: "yyyy-MM-dd",
  DATETIME_LOCAL: "yyyy-MM-dd'T'HH:mm",
} as const;

// Validation patterns
export const VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[\d\s\-\(\)]+$/,
  ZIP_CODE: /^\d{5}(-\d{4})?$/,
  URL: /^https?:\/\/.+/,
  SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
} as const;

// Validation messages
export const VALIDATION_MESSAGES = {
  REQUIRED: "This field is required",
  EMAIL: "Please enter a valid email address",
  PHONE: "Please enter a valid phone number",
  MIN_LENGTH: (min: number) => `Must be at least ${min} characters`,
  MAX_LENGTH: (max: number) => `Must be no more than ${max} characters`,
  PATTERN: "Invalid format",
} as const;

// Toast durations (in milliseconds)
export const TOAST_DURATION = {
  SHORT: 3000,
  MEDIUM: 5000,
  LONG: 8000,
} as const;

// Theme colors (for reference)
export const THEME_COLORS = {
  PRIMARY: "hsl(var(--primary))",
  SECONDARY: "hsl(var(--secondary))",
  DESTRUCTIVE: "hsl(var(--destructive))",
  MUTED: "hsl(var(--muted))",
} as const;

