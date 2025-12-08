/**
 * Error Logging Utility
 * 
 * Centralized error logging service that can be extended
 * to integrate with error tracking services (Sentry, LogRocket, etc.)
 */

export interface ErrorLog {
  message: string;
  stack?: string;
  errorInfo?: {
    componentStack?: string;
  };
  context?: Record<string, unknown>;
  timestamp: string;
  url?: string;
  userAgent?: string;
}

/**
 * Log error to console (development) or error tracking service (production)
 */
export function logError(error: Error, errorInfo?: React.ErrorInfo, context?: Record<string, unknown>) {
  const errorLog: ErrorLog = {
    message: error.message,
    stack: error.stack,
    errorInfo: errorInfo ? {
      componentStack: errorInfo.componentStack,
    } : undefined,
    context,
    timestamp: new Date().toISOString(),
    url: typeof window !== "undefined" ? window.location.href : undefined,
    userAgent: typeof window !== "undefined" ? window.navigator.userAgent : undefined,
  };

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.error("Error logged:", errorLog);
    return;
  }

  // In production, send to error tracking service
  // Example integrations:
  
  // Sentry
  // Sentry.captureException(error, {
  //   contexts: { react: errorInfo },
  //   extra: context,
  // });

  // LogRocket
  // LogRocket.captureException(error, {
  //   tags: context,
  // });

  // Custom API endpoint
  // fetch('/api/errors', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(errorLog),
  // }).catch(console.error);

  // For now, just log to console
  console.error("Error logged:", errorLog);
}

/**
 * Log warning message
 */
export function logWarning(message: string, context?: Record<string, unknown>) {
  if (process.env.NODE_ENV === "development") {
    console.warn("Warning:", message, context);
    return;
  }

  // In production, send to monitoring service
  console.warn("Warning:", message, context);
}

/**
 * Log info message
 */
export function logInfo(message: string, context?: Record<string, unknown>) {
  if (process.env.NODE_ENV === "development") {
    console.info("Info:", message, context);
  }
}


