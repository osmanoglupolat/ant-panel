"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Combobox } from "@/components/ui/combobox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export function AdvancedFormShowcase() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    countryCombobox: "",
    role: "",
    status: "",
    preferences: {
      newsletter: false,
      notifications: true,
      darkMode: false,
    },
    plan: "",
    message: "",
  });

  const countries = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
    { value: "jp", label: "Japan" },
  ];

  const roles = [
    { value: "admin", label: "Administrator" },
    { value: "editor", label: "Editor" },
    { value: "viewer", label: "Viewer" },
    { value: "guest", label: "Guest" },
  ];

  const plans = [
    { value: "free", label: "Free Plan" },
    { value: "pro", label: "Pro Plan" },
    { value: "enterprise", label: "Enterprise Plan" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Form submitted successfully!", {
      description: JSON.stringify(formData, null, 2),
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Advanced Form Components Showcase</CardTitle>
        <CardDescription>
          Examples of all form components: Input, Select, Combobox, Checkbox,
          Radio, Switch, and Textarea
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Text Inputs */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Text Inputs</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Select Dropdown */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Select Dropdown</h3>
            <div className="space-y-2">
              <Label htmlFor="country">Country (Select)</Label>
              <Select
                value={formData.country}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, country: value }))
                }
              >
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          {/* Combobox */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Combobox (Searchable)</h3>
            <div className="space-y-2">
              <Label>Country (Combobox)</Label>
              <Combobox
                options={countries}
                value={formData.countryCombobox}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, countryCombobox: value }))
                }
                placeholder="Search and select a country..."
                searchPlaceholder="Search countries..."
              />
            </div>
          </div>

          <Separator />

          {/* Radio Group */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Radio Buttons</h3>
            <div className="space-y-2">
              <Label>User Role</Label>
              <RadioGroup
                value={formData.role}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, role: value }))
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="admin" id="role-admin" />
                  <Label htmlFor="role-admin" className="cursor-pointer font-normal">
                    Administrator
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="editor" id="role-editor" />
                  <Label htmlFor="role-editor" className="cursor-pointer font-normal">
                    Editor
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="viewer" id="role-viewer" />
                  <Label htmlFor="role-viewer" className="cursor-pointer font-normal">
                    Viewer
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <Separator />

          {/* Checkboxes */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Checkboxes</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.preferences.newsletter}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      preferences: {
                        ...prev.preferences,
                        newsletter: checked === true,
                      },
                    }))
                  }
                />
                <Label htmlFor="newsletter" className="cursor-pointer font-normal">
                  Subscribe to newsletter
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="notifications"
                  checked={formData.preferences.notifications}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      preferences: {
                        ...prev.preferences,
                        notifications: checked === true,
                      },
                    }))
                  }
                />
                <Label htmlFor="notifications" className="cursor-pointer font-normal">
                  Enable email notifications
                </Label>
              </div>
            </div>
          </div>

          <Separator />

          {/* Switches */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Switches</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-muted-foreground text-sm">
                    Enable dark mode theme
                  </p>
                </div>
                <Switch
                  id="dark-mode"
                  checked={formData.preferences.darkMode}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      preferences: {
                        ...prev.preferences,
                        darkMode: checked,
                      },
                    }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="status">Account Status</Label>
                  <p className="text-muted-foreground text-sm">
                    Active or inactive status
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {formData.status === "active" ? "Active" : "Inactive"}
                  </span>
                  <Switch
                    id="status"
                    checked={formData.status === "active"}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        status: checked ? "active" : "inactive",
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Select with Groups */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Select with Options</h3>
            <div className="space-y-2">
              <Label htmlFor="plan">Subscription Plan</Label>
              <Select
                value={formData.plan}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, plan: value }))
                }
              >
                <SelectTrigger id="plan">
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  {plans.map((plan) => (
                    <SelectItem key={plan.value} value={plan.value}>
                      {plan.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          {/* Textarea */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Textarea</h3>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="Enter your message here..."
                rows={4}
              />
            </div>
          </div>

          <Separator />

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit">Submit Form</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

