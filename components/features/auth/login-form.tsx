"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth/auth-context";
import { DEMO_CREDENTIALS } from "@/lib/auth/mock-auth";

type FieldErrors = Partial<Record<"email" | "password", string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect");
  const { signIn, status } = useAuth();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    remember: true,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isAuthLoading = status === "loading";
  const isDisabled = isSubmitting || isAuthLoading;

  useEffect(() => {
    if (status === "authenticated") {
      router.replace(redirectPath ?? "/");
    }
  }, [redirectPath, router, status]);

  const validate = () => {
    const nextErrors: FieldErrors = {};

    if (!formValues.email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formValues.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formValues.password) {
      nextErrors.password = "Please enter your password.";
    } else if (formValues.password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await signIn(formValues);
      router.push(redirectPath ?? "/");
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Unable to sign in right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAutofill = () => {
    setFormValues({
      email: DEMO_CREDENTIALS.email,
      password: DEMO_CREDENTIALS.password,
      remember: true,
    });
    setErrors({});
    setFormError(null);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="rounded-lg border border-dashed border-border/60 bg-muted/30 p-3 text-sm text-muted-foreground">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-foreground">Demo account</p>
            <p>{DEMO_CREDENTIALS.email}</p>
            <p>Password: {DEMO_CREDENTIALS.password}</p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleAutofill}
          >
            Autofill
          </Button>
        </div>
      </div>

      <div className="space-y-2 text-center">
        <p className="text-sm font-medium text-primary">Welcome back</p>
        <h1 className="text-2xl font-semibold tracking-tight">
          Sign in to continue
        </h1>
        <p className="text-sm text-muted-foreground">
          Use your admin credentials to access the dashboard.
        </p>
      </div>

      {formError && (
        <div className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {formError}
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <div className="relative">
            <Mail className="text-muted-foreground/70 pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={formValues.email}
              onChange={handleChange}
              className="pl-10"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
          </div>
          {errors.email && (
            <p id="email-error" className="text-sm text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="text-muted-foreground/70 pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={formValues.password}
              onChange={handleChange}
              className="pl-10 pr-10"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            <button
              type="button"
              className="text-muted-foreground absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          {errors.password && (
            <p id="password-error" className="text-sm text-destructive">
              {errors.password}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <label
          htmlFor="remember"
          className="flex items-center gap-2 text-sm font-medium"
        >
          <Checkbox
            id="remember"
            checked={formValues.remember}
            onCheckedChange={(value) =>
              setFormValues((prev) => ({
                ...prev,
                remember: Boolean(value),
              }))
            }
          />
          <span>Remember me</span>
        </label>
        <Link
          href="/forgot-password"
          className="text-primary hover:text-primary/80 font-medium underline-offset-4 transition-colors hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" className="w-full" disabled={isDisabled}>
        {isDisabled ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Signing in...
          </span>
        ) : (
          "Sign in"
        )}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        By continuing, you agree to our{" "}
        <Link
          href="/forgot-password"
          className="text-primary underline-offset-4 hover:underline"
        >
          Terms
        </Link>{" "}
        and{" "}
        <Link
          href="/forgot-password"
          className="text-primary underline-offset-4 hover:underline"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}

