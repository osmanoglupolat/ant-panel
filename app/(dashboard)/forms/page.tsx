"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/features/forms/contact-form";
import { MultiStepForm } from "@/components/features/forms/multi-step-form";
import { AdvancedFormShowcase } from "@/components/features/forms/advanced-form-showcase";

export default function FormsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Form Examples</h1>
        <p className="text-muted-foreground text-sm">
          Examples of forms with validation, error handling, and all form components
        </p>
      </div>

      <Tabs defaultValue="components" className="w-full">
        <TabsList>
          <TabsTrigger value="components">Form Components</TabsTrigger>
          <TabsTrigger value="contact">Contact Form</TabsTrigger>
          <TabsTrigger value="multi-step">Multi-Step Form</TabsTrigger>
        </TabsList>
        <TabsContent value="components" className="mt-6">
          <AdvancedFormShowcase />
        </TabsContent>
        <TabsContent value="contact" className="mt-6">
          <ContactForm />
        </TabsContent>
        <TabsContent value="multi-step" className="mt-6">
          <MultiStepForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}

