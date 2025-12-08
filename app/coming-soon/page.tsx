import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Coming Soon | Ant Panel",
  description: "We&apos;re working on something amazing",
};

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-4">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Clock className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">
              Coming Soon
            </h1>
            <p className="text-muted-foreground">
              We&apos;re working hard to bring you something amazing. Stay tuned!
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">
              Get notified when we launch
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">
                <Mail className="mr-2 h-4 w-4" />
                Notify Me
              </Button>
            </form>
          </div>

          <div className="pt-4">
            <Button variant="outline" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

