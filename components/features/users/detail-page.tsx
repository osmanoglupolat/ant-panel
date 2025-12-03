"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { dashboardData } from "@/lib/mocks/dashboard";

export function UserDetailsPage() {
  const user = dashboardData.users[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">User</p>
          <h1 className="text-3xl font-semibold tracking-tight">{user.name}</h1>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Disable</Button>
          <Button>Edit profile</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>Plan, location and last activity.</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="grid gap-4 md:grid-cols-3">
            <div>
              <dt className="text-sm text-muted-foreground">Role</dt>
              <dd className="text-lg font-medium">{user.role}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Status</dt>
              <dd className="text-lg font-medium capitalize">{user.status}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Last active</dt>
              <dd className="text-lg font-medium">{user.lastActive}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}

