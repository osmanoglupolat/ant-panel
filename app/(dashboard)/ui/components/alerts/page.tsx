import type { Metadata } from "next";
import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Alerts | UI Components | Ant Panel",
  description: "Alert component examples and variations.",
};

export default function AlertsPage() {
  return (
    <ShowcaseLayout
      title="Alerts"
      description="Alert components for displaying important messages."
    >
      <ShowcaseSection title="Success Alert" description="Success message alert">
        <div className="rounded-lg border bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900 p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-medium text-emerald-900 dark:text-emerald-100">
                Success
              </h4>
              <p className="text-sm text-emerald-800 dark:text-emerald-200 mt-1">
                Your changes have been saved successfully.
              </p>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Error Alert" description="Error message alert">
        <div className="rounded-lg border bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900 p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-medium text-red-900 dark:text-red-100">
                Error
              </h4>
              <p className="text-sm text-red-800 dark:text-red-200 mt-1">
                There was an error processing your request. Please try again.
              </p>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Warning Alert" description="Warning message alert">
        <div className="rounded-lg border bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900 p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-medium text-yellow-900 dark:text-yellow-100">
                Warning
              </h4>
              <p className="text-sm text-yellow-800 dark:text-yellow-200 mt-1">
                Your subscription will expire in 7 days. Please renew to continue.
              </p>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Info Alert" description="Informational alert">
        <div className="rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900 p-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-medium text-blue-900 dark:text-blue-100">
                Information
              </h4>
              <p className="text-sm text-blue-800 dark:text-blue-200 mt-1">
                A new feature has been released. Check it out in the settings.
              </p>
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}
