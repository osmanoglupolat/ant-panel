import type { Metadata } from "next";
import Link from "next/link";

import { ForgotPasswordForm } from "@/components/features/auth/forgot-password-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Forgot password | Admin Panel",
  description:
    "Request a new password reset link for your Ant Panel administrator account.",
};

const highlights = [
  { title: "Response time", value: "< 2 min" },
  { title: "Status", value: "All systems operational" },
];

export default function ForgotPasswordPage() {
  return (
    <div className="bg-background lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background lg:flex">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px,rgba(255,255,255,0.18),transparent_1px)] [background-size:32px_32px]" />
        <div className="relative z-10 flex flex-col p-12 text-foreground">
          <div className="mb-8 space-y-4">
            <span className="bg-primary/15 text-primary inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
              Secure Recovery
            </span>
            <h2 className="text-3xl font-semibold leading-tight">
              Access shouldn&apos;t stall growth.
            </h2>
            <p className="text-muted-foreground max-w-md text-sm">
              Keep your teams moving with instant reset links and proactive
              security notifications. Every request is monitored in real time.
            </p>
          </div>
          <div className="mt-auto grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur"
              >
                <p className="text-sm text-white/70">{item.title}</p>
                <p className="text-2xl font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-between px-8 pb-8 text-xs text-white/70">
          <p>Incident response SLA · 15 minutes</p>
          <p>audit.antpanel.dev</p>
        </div>
      </div>

      <div className="flex min-h-screen flex-col px-6 py-8 sm:px-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Ant Panel
            </p>
            <p className="text-lg font-semibold text-foreground">
              Account Recovery
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
            <ForgotPasswordForm />
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Need immediate help?{" "}
          <Link
            href="#"
            className="text-foreground underline-offset-4 hover:underline"
          >
            Contact security desk
          </Link>
        </p>
      </div>
    </div>
  );
}

