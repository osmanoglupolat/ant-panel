import type { Metadata } from "next";
import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export const metadata: Metadata = {
  title: "Form Components | UI | Ant Panel",
  description: "Form component examples and variations.",
};

export default function FormComponentsPage() {
  return (
    <ShowcaseLayout
      title="Form Components"
      description="A comprehensive collection of form input components and variations."
    >
      <ShowcaseSection title="Input Fields" description="Text input variations">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="default-input">Default Input</Label>
            <Input id="default-input" placeholder="Enter text..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled-input">Disabled Input</Label>
            <Input id="disabled-input" placeholder="Disabled input" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="error-input">Input with Error</Label>
            <Input id="error-input" placeholder="Error state" className="border-destructive" />
            <p className="text-sm text-destructive">This field is required</p>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Textarea" description="Multi-line text input">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="textarea">Textarea</Label>
            <Textarea id="textarea" placeholder="Enter your message..." rows={4} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="textarea-disabled">Disabled Textarea</Label>
            <Textarea id="textarea-disabled" placeholder="Disabled" disabled rows={4} />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Checkbox" description="Checkbox input variations">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="checkbox-default" />
            <Label htmlFor="checkbox-default">Default checkbox</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="checkbox-checked" defaultChecked />
            <Label htmlFor="checkbox-checked">Checked checkbox</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="checkbox-disabled" disabled />
            <Label htmlFor="checkbox-disabled">Disabled checkbox</Label>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Radio Group" description="Radio button options">
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="radio-one" />
            <Label htmlFor="radio-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="radio-two" />
            <Label htmlFor="radio-two">Option Two</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="radio-three" disabled />
            <Label htmlFor="radio-three">Option Three (Disabled)</Label>
          </div>
        </RadioGroup>
      </ShowcaseSection>

      <ShowcaseSection title="Select" description="Dropdown select component">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Select an option</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option-1">Option 1</SelectItem>
                <SelectItem value="option-2">Option 2</SelectItem>
                <SelectItem value="option-3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Disabled Select</Label>
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="Disabled" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option-1">Option 1</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Switch" description="Toggle switch component">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="switch-default">Default Switch</Label>
            <Switch id="switch-default" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="switch-checked">Checked Switch</Label>
            <Switch id="switch-checked" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="switch-disabled">Disabled Switch</Label>
            <Switch id="switch-disabled" disabled />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Button Variants" description="Button types in forms">
        <div className="flex flex-wrap gap-3">
          <Button type="submit">Submit</Button>
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="button" variant="secondary">
            Secondary
          </Button>
          <Button type="button" variant="destructive">
            Delete
          </Button>
          <Button type="button" variant="ghost">
            Ghost
          </Button>
          <Button type="button" variant="link">
            Link
          </Button>
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}
