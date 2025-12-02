"use client";

import { PlusCircle, Shield, UserPlus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    id: "1",
    name: "Sarah Tan",
    email: "sarah@antpanel.dev",
    role: "Owner",
  },
  {
    id: "2",
    name: "Ethan Zhou",
    email: "ethan@antpanel.dev",
    role: "Admin",
  },
  {
    id: "3",
    name: "Maya Uzun",
    email: "maya@antpanel.dev",
    role: "Editor",
  },
];

export function TeamSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-0">
          <div>
            <CardDescription>Team</CardDescription>
            <CardTitle className="text-lg">Manage members</CardTitle>
          </div>
          <CardAction className="flex gap-2">
            <Button variant="outline" size="sm">
              <Shield className="mr-2 h-4 w-4" />
              Permissions
            </Button>
            <Button size="sm">
              <UserPlus className="mr-2 h-4 w-4" />
              Invite member
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="pt-6 space-y-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between rounded-2xl border border-border/60 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/avatars/shadcn.jpg" alt={member.name} />
                  <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.email}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                {member.role}
              </Button>
            </div>
          ))}
          <button className="w-full rounded-2xl border border-dashed border-border/60 px-3 py-4 text-sm text-muted-foreground transition hover:border-primary hover:text-primary">
            <PlusCircle className="mr-2 inline h-4 w-4" />
            Add another member
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

