import type { Metadata } from "next";
import { UsersPage } from "@/components/features/users/list-page";
import { ShowcaseLayout } from "@/components/features/ui/showcase-layout";

export const metadata: Metadata = {
  title: "Full Page Data Table | UI | Ant Panel",
  description: "Full page data table with advanced features.",
};

export default function FullPageDataTablePage() {
  return (
    <ShowcaseLayout
      title="Full Page Data Table"
      description="A comprehensive data table with sorting, filtering, pagination, and row selection."
    >
      <UsersPage />
    </ShowcaseLayout>
  );
}

