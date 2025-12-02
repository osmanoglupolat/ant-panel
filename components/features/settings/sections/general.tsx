"use client";

import Image from "next/image";
import { Camera } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function GeneralSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-0">
          <div>
            <CardDescription>Profile</CardDescription>
            <CardTitle className="text-lg">Personal information</CardTitle>
          </div>
          <CardAction>
            <Button variant="outline" size="sm">
              Save profile
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-[200px_1fr]">
            <div className="space-y-3">
              <div className="relative h-32 w-32 overflow-hidden rounded-2xl border">
                <Image
                  src="/avatars/shadcn.jpg"
                  alt="Avatar"
                  fill
                  className="object-cover"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute inset-x-0 bottom-2 mx-auto size-9 rounded-full"
                  aria-label="Change avatar"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Recommended: 800x800px, PNG or JPG.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="Alex" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Hilton" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="alex@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-0">
          <div>
            <CardDescription>Preferences</CardDescription>
            <CardTitle className="text-lg">Localization & theme</CardTitle>
          </div>
          <CardAction>
            <Button variant="outline" size="sm">
              Save preferences
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="tr">Türkçe</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select defaultValue="gmt-3">
                <SelectTrigger id="timezone">
                  <SelectValue placeholder="UTC offset" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pst">UTC-8 (PST)</SelectItem>
                  <SelectItem value="gmt">UTC+0 (GMT)</SelectItem>
                  <SelectItem value="gmt-3">UTC+3 (Istanbul)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="theme">Theme preset</Label>
              <Select defaultValue="system">
                <SelectTrigger id="theme">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="system">System</SelectItem>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

