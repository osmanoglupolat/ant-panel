"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const sessions = [
  { id: "1", device: "MacBook Pro", location: "Istanbul, TR", status: "Active now" },
  { id: "2", device: "iPhone 15", location: "Istanbul, TR", status: "2h ago" },
];

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-0">
          <div>
            <CardDescription>Security</CardDescription>
            <CardTitle className="text-lg">Change password</CardTitle>
          </div>
          <CardAction>
            <Button variant="outline" size="sm">
              Update password
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm</Label>
              <Input id="confirm" type="password" placeholder="••••••••" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-3xl">
        <CardHeader className="pb-0">
          <div>
            <CardDescription>Two-factor</CardDescription>
            <CardTitle className="text-lg">Authentication</CardTitle>
          </div>
          <CardAction>
            <Switch defaultChecked />
          </CardAction>
        </CardHeader>
        <CardContent className="pt-4 space-y-4">
          <p className="text-sm text-muted-foreground">
            Protect your account with an additional layer of security. We recommend
            enabling 2FA for all administrator accounts.
          </p>
          <Button variant="outline" size="sm">
            Configure authenticator
          </Button>
        </CardContent>
      </Card>

      <Card className="rounded-3xl">
        <CardHeader className="pb-0">
          <div>
            <CardDescription>Sessions</CardDescription>
            <CardTitle className="text-lg">Active devices</CardTitle>
          </div>
          <CardAction>
            <Button variant="ghost" size="sm">
              Log out all
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="pt-6 space-y-3">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="flex items-center justify-between rounded-2xl border border-border/60 px-3 py-3 text-sm"
            >
              <div>
                <p className="font-medium text-foreground">{session.device}</p>
                <p className="text-muted-foreground">{session.location}</p>
              </div>
              <span className="text-xs text-muted-foreground">
                {session.status}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

