import type { Metadata } from "next";
import { MultiStepForm } from "@/components/features/forms/multi-step-form";
import { ShowcaseLayout } from "@/components/features/ui/showcase-layout";

export const metadata: Metadata = {
  title: "Form Wizard | UI | Ant Panel",
  description: "Multi-step form wizard example.",
};

export default function FormWizardPage() {
  return (
    <ShowcaseLayout
      title="Form Wizard"
      description="Multi-step form wizard with progress indicator."
    >
      <MultiStepForm />
    </ShowcaseLayout>
  );
}

