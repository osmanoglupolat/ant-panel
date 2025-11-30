"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormState = "idle" | "submitting" | "success";

export function ForgotPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  const isSubmitting = state === "submitting";
  const isSuccess = state === "success";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setState("submitting");
    // Mock async request
    await new Promise((resolve) => setTimeout(resolve, 900));
    setState("success");
  };

  const handleReset = () => {
    setState("idle");
    setEmail("");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="space-y-2 text-center">
        <p className="text-sm font-medium text-primary">Need a new link?</p>
        <h1 className="text-2xl font-semibold tracking-tight">
          Reset your password
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter the email associated with your account. We&apos;ll send you
          a secure link to set a new password.
        </p>
      </div>

      {isSuccess ? (
        <div className="space-y-4 rounded-lg border border-primary/20 bg-primary/5 px-4 py-5 text-center text-sm text-foreground">
          <p className="font-semibold">Request sent!</p>
          <p className="text-muted-foreground">
            If an account exists for <strong>{email}</strong>, you&apos;ll
            receive a reset link shortly. Be sure to check your spam folder.
          </p>
          <div className="flex flex-col gap-2">
            <Button type="button" onClick={() => router.push("/login")}>
              Back to login
            </Button>
            <Button type="button" variant="ghost" onClick={handleReset}>
              Send to a different email
            </Button>
          </div>
        </div>
      ) : (
        <>
          {error && (
            <div className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="forgot-email">Email address</Label>
            <div className="relative">
              <Mail className="text-muted-foreground/70 pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              <Input
                id="forgot-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending instructions...
              </span>
            ) : (
              "Send reset instructions"
            )}
          </Button>
        </>
      )}

      {!isSuccess && (
        <div className="text-center text-sm text-muted-foreground">
          Remembered it?{" "}
          <Link
            href="/login"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            Back to sign in
          </Link>
        </div>
      )}
    </form>
  );
}

