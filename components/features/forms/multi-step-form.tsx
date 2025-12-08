"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

type FormData = {
  // Step 1: Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  // Step 2: Address
  address: string;
  city: string;
  state: string;
  zipCode: string;
  // Step 3: Preferences
  newsletter: boolean;
  notifications: boolean;
  terms: boolean;
};

type StepErrors = Partial<Record<keyof FormData, string>>;

const steps = [
  { id: 1, title: "Personal Information" },
  { id: 2, title: "Address Details" },
  { id: 3, title: "Preferences" },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[\d\s\-\(\)]+$/;

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    newsletter: false,
    notifications: false,
    terms: false,
  });
  const [errors, setErrors] = useState<StepErrors>({});

  const validateStep = (step: number): boolean => {
    const nextErrors: StepErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) {
        nextErrors.firstName = "First name is required";
      }
      if (!formData.lastName.trim()) {
        nextErrors.lastName = "Last name is required";
      }
      if (!formData.email.trim()) {
        nextErrors.email = "Email is required";
      } else if (!emailRegex.test(formData.email)) {
        nextErrors.email = "Please enter a valid email";
      }
      if (!formData.phone.trim()) {
        nextErrors.phone = "Phone number is required";
      } else if (!phoneRegex.test(formData.phone)) {
        nextErrors.phone = "Please enter a valid phone number";
      }
    } else if (step === 2) {
      if (!formData.address.trim()) {
        nextErrors.address = "Address is required";
      }
      if (!formData.city.trim()) {
        nextErrors.city = "City is required";
      }
      if (!formData.state) {
        nextErrors.state = "State is required";
      }
      if (!formData.zipCode.trim()) {
        nextErrors.zipCode = "ZIP code is required";
      } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
        nextErrors.zipCode = "Please enter a valid ZIP code";
      }
    } else if (step === 3) {
      if (!formData.terms) {
        nextErrors.terms = "You must accept the terms and conditions";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
      }
    } else {
      toast.error("Please fix the errors before continuing");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(3)) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Form submitted successfully!");
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      newsletter: false,
      notifications: false,
      terms: false,
    });
    setCurrentStep(1);
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (name: keyof FormData, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Multi-Step Form</CardTitle>
        <CardDescription>
          A multi-step form with step validation and progress indicator
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Progress Indicator */}
        <div className="mb-8 flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                    currentStep > step.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : currentStep === step.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted bg-background text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <p
                  className={`mt-2 text-xs ${
                    currentStep >= step.id
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`mx-4 h-0.5 w-16 ${
                    currentStep > step.id ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    First Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    aria-invalid={Boolean(errors.firstName)}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-destructive">{errors.firstName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    Last Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    aria-invalid={Boolean(errors.lastName)}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-destructive">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Address */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">
                  Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="123 Main St"
                  aria-invalid={Boolean(errors.address)}
                />
                {errors.address && (
                  <p className="text-sm text-destructive">{errors.address}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">
                    City <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="New York"
                    aria-invalid={Boolean(errors.city)}
                  />
                  {errors.city && (
                    <p className="text-sm text-destructive">{errors.city}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">
                    State <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.state}
                    onValueChange={(value) => handleSelectChange("state", value)}
                  >
                    <SelectTrigger id="state" aria-invalid={Boolean(errors.state)}>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="CA">California</SelectItem>
                      <SelectItem value="TX">Texas</SelectItem>
                      <SelectItem value="FL">Florida</SelectItem>
                      <SelectItem value="IL">Illinois</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.state && (
                    <p className="text-sm text-destructive">{errors.state}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">
                  ZIP Code <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="10001"
                  aria-invalid={Boolean(errors.zipCode)}
                />
                {errors.zipCode && (
                  <p className="text-sm text-destructive">{errors.zipCode}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Preferences */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange("newsletter", checked === true)
                    }
                  />
                  <Label htmlFor="newsletter" className="cursor-pointer">
                    Subscribe to newsletter
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="notifications"
                    checked={formData.notifications}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange("notifications", checked === true)
                    }
                  />
                  <Label htmlFor="notifications" className="cursor-pointer">
                    Enable email notifications
                  </Label>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange("terms", checked === true)
                      }
                      aria-invalid={Boolean(errors.terms)}
                    />
                    <Label htmlFor="terms" className="cursor-pointer">
                      I agree to the terms and conditions{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                  </div>
                  {errors.terms && (
                    <p className="text-sm text-destructive ml-6">{errors.terms}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            {currentStep < steps.length ? (
              <Button type="button" onClick={handleNext}>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

