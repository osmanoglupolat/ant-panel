import type { Metadata } from "next";
import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Form Layouts | UI | Ant Panel",
  description: "Different form layout patterns and structures.",
};

export default function FormLayoutsPage() {
  return (
    <ShowcaseLayout
      title="Form Layouts"
      description="Various form layout patterns for different use cases."
    >
      <ShowcaseSection
        title="Single Column Layout"
        description="Standard vertical form layout"
      >
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Enter your contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <Button>Submit</Button>
          </CardContent>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        title="Two Column Layout"
        description="Responsive grid form layout"
      >
        <Card>
          <CardHeader>
            <CardTitle>Account Details</CardTitle>
            <CardDescription>Update your account information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-2">Email</Label>
                <Input id="email-2" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone-2">Phone</Label>
                <Input id="phone-2" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
            </div>
            <div className="mt-4">
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        title="Inline Form Layout"
        description="Horizontal form with inline fields"
      >
        <Card>
          <CardHeader>
            <CardTitle>Quick Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              <Input placeholder="Search..." className="flex-1 min-w-[200px]" />
              <Button>Search</Button>
              <Button variant="outline">Reset</Button>
            </div>
          </CardContent>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        title="Form with Separator"
        description="Form sections divided by separators"
      >
        <Card>
          <CardHeader>
            <CardTitle>Complete Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Personal Information</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name-2">First Name</Label>
                  <Input id="first-name-2" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name-2">Last Name</Label>
                  <Input id="last-name-2" />
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-4">
              <h3 className="font-medium">Contact Information</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-3">Email</Label>
                  <Input id="email-3" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone-3">Phone</Label>
                  <Input id="phone-3" type="tel" />
                </div>
              </div>
            </div>
            <Separator />
            <Button>Complete Profile</Button>
          </CardContent>
        </Card>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}

