"use client";

import { FileUpload } from "@/components/ui/file-upload";
import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import { useState } from "react";
import { toast } from "sonner";

export function FileUploadShowcase() {
  const [files1, setFiles1] = useState<File[]>([]);
  const [files2, setFiles2] = useState<File[]>([]);
  const [files3, setFiles3] = useState<File[]>([]);
  const [files4, setFiles4] = useState<File[]>([]);

  return (
    <ShowcaseLayout
      title="File Upload"
      description="File upload component with drag and drop, preview, and validation."
    >
      <ShowcaseSection
        title="Basic File Upload"
        description="Single file upload with drag and drop"
      >
        <FileUpload
          accept="*/*"
          maxSize={5 * 1024 * 1024} // 5MB
          maxFiles={1}
          dragAndDrop={true}
          showPreview={true}
          showProgress={true}
          onFilesSelected={(files) => {
            setFiles1(files);
            toast.success(`${files.length} file(s) selected`);
          }}
          onFilesRemoved={(files) => {
            setFiles1([]);
            toast.info(`${files.length} file(s) removed`);
          }}
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Multiple Files Upload"
        description="Upload multiple files at once"
      >
        <FileUpload
          accept="*/*"
          maxSize={10 * 1024 * 1024} // 10MB
          maxFiles={5}
          dragAndDrop={true}
          showPreview={true}
          showProgress={true}
          onFilesSelected={(files) => {
            setFiles2(files);
            toast.success(`${files.length} file(s) selected`);
          }}
          onFilesRemoved={(files) => {
            toast.info(`${files.length} file(s) removed`);
          }}
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Image Files Only"
        description="Restricted to image files with preview"
      >
        <FileUpload
          accept="image/*"
          maxSize={5 * 1024 * 1024} // 5MB
          maxFiles={3}
          dragAndDrop={true}
          showPreview={true}
          showProgress={true}
          onFilesSelected={(files) => {
            setFiles3(files);
            toast.success(`${files.length} image(s) selected`);
          }}
          onFilesRemoved={(files) => {
            toast.info(`${files.length} image(s) removed`);
          }}
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Document Files Only"
        description="Upload PDF, DOC, DOCX files"
      >
        <FileUpload
          accept=".pdf,.doc,.docx"
          maxSize={10 * 1024 * 1024} // 10MB
          maxFiles={3}
          dragAndDrop={true}
          showPreview={false}
          showProgress={true}
          onFilesSelected={(files) => {
            setFiles4(files);
            toast.success(`${files.length} document(s) selected`);
          }}
          onFilesRemoved={(files) => {
            toast.info(`${files.length} document(s) removed`);
          }}
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Traditional File Input"
        description="File upload without drag and drop"
      >
        <FileUpload
          accept="*/*"
          maxSize={5 * 1024 * 1024} // 5MB
          maxFiles={1}
          dragAndDrop={false}
          showPreview={true}
          showProgress={true}
          onFilesSelected={(files) => {
            toast.success(`${files.length} file(s) selected`);
          }}
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Disabled State"
        description="File upload component in disabled state"
      >
        <FileUpload
          accept="*/*"
          maxSize={5 * 1024 * 1024} // 5MB
          maxFiles={1}
          dragAndDrop={true}
          showPreview={true}
          showProgress={true}
          disabled={true}
        />
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}

