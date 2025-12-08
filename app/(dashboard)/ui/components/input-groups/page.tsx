import type { Metadata } from "next";
import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Search, Mail, Lock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Input Groups | UI Components | Ant Panel",
  description: "Input group component examples and variations.",
};

export default function InputGroupsPage() {
  return (
    <ShowcaseLayout
      title="Input Groups"
      description="Input group variations with icons and addons."
    >
      <ShowcaseSection
        title="Input with Leading Icon"
        description="Input field with icon on the left"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Search</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="Search..." />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input className="pl-9" type="email" placeholder="email@example.com" />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Input with Trailing Icon"
        description="Input field with icon on the right"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Password</Label>
            <div className="relative">
              <Input className="pr-9" type="password" placeholder="Enter password" />
              <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Input with Button"
        description="Input field with button addon"
      >
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input placeholder="Enter email..." className="flex-1" />
            <Button>Subscribe</Button>
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="Username" />
            </div>
            <Button variant="outline">Search</Button>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Input with Prefix/Suffix"
        description="Input with text prefix or suffix"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Website</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-muted text-muted-foreground">
                https://
              </span>
              <Input className="rounded-l-none" placeholder="example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Price</Label>
            <div className="flex">
              <Input className="rounded-r-none" placeholder="0.00" />
              <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 bg-muted text-muted-foreground">
                USD
              </span>
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}

