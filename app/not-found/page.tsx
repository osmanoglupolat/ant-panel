import type { Metadata } from "next";
import NotFoundLayout from "@/components/layouts/not-found";

export const metadata: Metadata = {
  title: "Not Found | Ant Panel",
  description: "Page not found",
};

export default function NotFoundPage() {
  return <NotFoundLayout />;
}
