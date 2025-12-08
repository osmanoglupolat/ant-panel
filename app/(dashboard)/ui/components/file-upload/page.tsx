import type { Metadata } from "next";
import { FileUploadShowcase } from "@/components/features/ui/file-upload-showcase";

export const metadata: Metadata = {
  title: "File Upload | UI Components | Ant Panel",
  description: "File upload component examples and variations.",
};

export default function FileUploadPage() {
  return <FileUploadShowcase />;
}

