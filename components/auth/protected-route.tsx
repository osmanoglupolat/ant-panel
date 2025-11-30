"use client";

import { Loader2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import { useAuth } from "@/lib/auth/auth-context";

type ProtectedRouteProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

export function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const { status } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "unauthenticated") {
      const redirectQuery =
        pathname && pathname.length > 1
          ? `?redirect=${encodeURIComponent(pathname)}`
          : "";

      router.replace(`/login${redirectQuery}`);
    }
  }, [pathname, router, status]);

  if (status === "loading" || status === "idle") {
    return (
      fallback ?? (
        <div className="flex min-h-[60vh] w-full items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      )
    );
  }

  if (status === "unauthenticated") {
    return null;
  }

  return <>{children}</>;
}

