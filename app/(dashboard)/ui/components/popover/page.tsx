"use client";

import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";

export default function PopoverPage() {
  return (
    <ShowcaseLayout
      title="Popover"
      description="Popover component examples and variations."
    >
      <ShowcaseSection title="Basic Popover" description="Simple popover">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </ShowcaseSection>

      <ShowcaseSection
        title="Popover with Form"
        description="Popover containing a form"
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <CalendarIcon className="mr-2 h-4 w-4" />
              Pick a date
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Date Picker</h4>
                <p className="text-sm text-muted-foreground">
                  Select a date from the calendar.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="popover-input">Additional Info</Label>
                <Input id="popover-input" placeholder="Enter information" />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}

