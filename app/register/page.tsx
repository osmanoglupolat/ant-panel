import type { Metadata } from "next";
import { RegisterForm } from "@/components/features/auth/register-form";

export const metadata: Metadata = {
  title: "Register | Ant Panel",
  description: "Create a new account",
};

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Create Account</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your information to create an account
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}

