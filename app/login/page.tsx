import type { Metadata } from "next";
import Link from "next/link";

import { LoginForm } from "@/components/features/auth/login-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sign in | Admin Panel",
  description:
    "Access the Ant Panel dashboard with your administrator account.",
};

const heroHighlights = [
  { title: "Teams onboarded", value: "120+" },
  { title: "Active projects", value: "48" },
  { title: "Global uptime", value: "99.98%" },
];

export default function LoginPage() {
  return (
    <div className="bg-background lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background lg:flex">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px,rgba(255,255,255,0.18),transparent_1px)] [background-size:32px_32px]" />
        <div className="relative z-10 flex flex-col p-12 text-foreground">
          <div className="mb-8">
            <span className="bg-primary/15 text-primary inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
              Ant Panel
            </span>
            <h2 className="mt-6 text-3xl font-semibold leading-tight">
              Operate with clarity. <br />
              Scale with confidence.
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md text-sm">
              Manage teams, monitor KPIs, and orchestrate workflows from a
              single, beautifully crafted dashboard experience.
            </p>
          </div>

          <div className="mt-auto grid gap-4 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-dashed border-border/60 bg-muted/30 p-3 text-sm text-muted-foreground"
              >
                <p className="text-sm">{item.title}</p>
                <p className="text-2xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-between px-8 py-4 text-xs opacity-70">
          <p>ISO 27001 certified infrastructure</p>
          <p>Live status · status.antpanel.io</p>
        </div>
      </div>

      <div className="flex min-h-screen flex-col px-6 py-8 sm:px-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Ant Panel
            </p>
            <p className="text-lg font-semibold text-foreground">
              Admin Experience
            </p>
          </div>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "text-muted-foreground hover:text-foreground"
            )}
          >
            Back to site
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md py-12">
            <LoginForm />
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Need help?{" "}
          <Link
            href="#"
            className="text-foreground underline-offset-4 hover:underline"
          >
            Contact support
          </Link>
        </p>
      </div>
    </div>
  );
}
