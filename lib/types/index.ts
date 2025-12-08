/**
 * Centralized Type Definitions
 * 
 * This file exports all shared type definitions used across the application.
 * For feature-specific types, see individual type files in the same directory.
 */

// Re-export all types from feature modules
export * from "./dashboard";
export * from "./users";
export * from "./kanban";
export * from "./calendar";

// Common utility types
export type Status = "active" | "inactive" | "pending" | "disabled" | "invited";

export type Priority = "low" | "medium" | "high" | "urgent";

export type Theme = "light" | "dark" | "system";

// API Response types (for future backend integration)
export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface FormErrors {
  [key: string]: string | undefined;
}

export interface FormState<T> {
  data: T;
  errors: FormErrors;
  isSubmitting: boolean;
  isDirty: boolean;
}

