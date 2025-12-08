"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function FormValidationPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email";
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success("Form submitted successfully!");
    } else {
      toast.error("Please fix the errors in the form");
    }
  };

  return (
    <ShowcaseLayout
      title="Form Validation"
      description="Form validation examples with error handling."
    >
      <ShowcaseSection
        title="Real-time Validation"
        description="Inline validation as user types"
      >
        <Card>
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription>
              Form with real-time validation feedback
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="val-email">Email</Label>
                <Input
                  id="val-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) {
                      const error = validateEmail(e.target.value);
                      setErrors({ ...errors, email: error });
                    }
                  }}
                  onBlur={(e) => {
                    const error = validateEmail(e.target.value);
                    setErrors({ ...errors, email: error });
                  }}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="val-password">Password</Label>
                <Input
                  id="val-password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                    if (errors.password) {
                      const error = validatePassword(e.target.value);
                      setErrors({ ...errors, password: error });
                    }
                  }}
                  onBlur={(e) => {
                    const error = validatePassword(e.target.value);
                    setErrors({ ...errors, password: error });
                  }}
                  className={errors.password ? "border-destructive" : ""}
                />
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  Must be at least 8 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="val-confirm">Confirm Password</Label>
                <Input
                  id="val-confirm"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => {
                    setFormData({ ...formData, confirmPassword: e.target.value });
                    if (errors.confirmPassword) {
                      const error =
                        e.target.value !== formData.password
                          ? "Passwords do not match"
                          : "";
                      setErrors({ ...errors, confirmPassword: error });
                    }
                  }}
                  onBlur={(e) => {
                    const error =
                      e.target.value !== formData.password
                        ? "Passwords do not match"
                        : "";
                    setErrors({ ...errors, confirmPassword: error });
                  }}
                  className={errors.confirmPassword ? "border-destructive" : ""}
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-destructive">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <Button type="submit">Create Account</Button>
            </form>
          </CardContent>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        title="Validation States"
        description="Different validation states and messages"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Valid Input</Label>
            <Input value="valid@example.com" className="border-emerald-500" />
            <p className="text-sm text-emerald-600">Email is valid</p>
          </div>
          <div className="space-y-2">
            <Label>Invalid Input</Label>
            <Input value="invalid" className="border-destructive" />
            <p className="text-sm text-destructive">
              Please enter a valid email address
            </p>
          </div>
          <div className="space-y-2">
            <Label>Warning Input</Label>
            <Input value="test" className="border-yellow-500" />
            <p className="text-sm text-yellow-600">
              Email format looks incomplete
            </p>
          </div>
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}

