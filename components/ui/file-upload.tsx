"use client";

import * as React from "react";
import { useCallback, useState } from "react";
import { IconUpload, IconX, IconFile, IconCheck } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export interface FileUploadProps {
  /**
   * Accepted file types (MIME types or file extensions)
   * Example: "image/*" or ".pdf,.doc,.docx"
   */
  accept?: string;
  /**
   * Maximum file size in bytes
   */
  maxSize?: number;
  /**
   * Maximum number of files allowed
   */
  maxFiles?: number;
  /**
   * Enable drag and drop functionality
   */
  dragAndDrop?: boolean;
  /**
   * Show file preview
   */
  showPreview?: boolean;
  /**
   * Show upload progress
   */
  showProgress?: boolean;
  /**
   * Callback when files are selected
   */
  onFilesSelected?: (files: File[]) => void;
  /**
   * Callback when files are removed
   */
  onFilesRemoved?: (files: File[]) => void;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
}

interface FileWithPreview extends File {
  preview?: string;
  id: string;
  progress?: number;
  status?: "pending" | "uploading" | "success" | "error";
}

export function FileUpload({
  accept = "*/*",
  maxSize = 10 * 1024 * 1024, // 10MB default
  maxFiles = 1,
  dragAndDrop = true,
  showPreview = true,
  showProgress = true,
  onFilesSelected,
  onFilesRemoved,
  className,
  disabled = false,
}: FileUploadProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const validateFile = (file: File): string | null => {
    // Check file size
    if (file.size > maxSize) {
      return `File "${file.name}" exceeds maximum size of ${(maxSize / 1024 / 1024).toFixed(2)}MB`;
    }

    // Check file type if accept is specified
    if (accept !== "*/*") {
      const acceptPatterns = accept.split(",").map((pattern) => pattern.trim());
      const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();
      const fileType = file.type;

      const isValid =
        acceptPatterns.some((pattern) => {
          if (pattern.startsWith(".")) {
            return fileExtension === pattern.toLowerCase();
          }
          if (pattern.endsWith("/*")) {
            const baseType = pattern.split("/")[0];
            return fileType.startsWith(baseType + "/");
          }
          return fileType === pattern || fileExtension === pattern;
        }) || acceptPatterns.includes("*/*");

      if (!isValid) {
        return `File "${file.name}" is not an accepted file type. Accepted types: ${accept}`;
      }
    }

    return null;
  };

  const handleFiles = useCallback(
    (selectedFiles: FileList | File[]) => {
      const fileArray = Array.from(selectedFiles);
      const newErrors: string[] = [];
      const validFiles: FileWithPreview[] = [];

      // Check max files limit
      if (files.length + fileArray.length > maxFiles) {
        newErrors.push(
          `Maximum ${maxFiles} file(s) allowed. You selected ${fileArray.length} file(s) but only ${maxFiles - files.length} slot(s) remaining.`
        );
        setErrors(newErrors);
        return;
      }

      fileArray.forEach((file) => {
        const error = validateFile(file);
        if (error) {
          newErrors.push(error);
        } else {
          const fileWithPreview: FileWithPreview = Object.assign(file, {
            id: Math.random().toString(36).substring(7),
            preview: file.type.startsWith("image/")
              ? URL.createObjectURL(file)
              : undefined,
            status: "pending" as const,
            progress: 0,
          });
          validFiles.push(fileWithPreview);
        }
      });

      if (newErrors.length > 0) {
        setErrors(newErrors);
        setTimeout(() => setErrors([]), 5000); // Clear errors after 5 seconds
      }

      if (validFiles.length > 0) {
        const updatedFiles = [...files, ...validFiles];
        setFiles(updatedFiles);
        onFilesSelected?.(validFiles);

        // Simulate upload progress (in real app, this would be from API)
        validFiles.forEach((file) => {
          simulateUpload(file.id);
        });
      }
    },
    [files, maxFiles, maxSize, accept, onFilesSelected]
  );

  const simulateUpload = (fileId: string) => {
    setFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === fileId ? { ...file, status: "uploading" as const } : file
      )
    );

    // Simulate progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setFiles((prevFiles) =>
          prevFiles.map((file) =>
            file.id === fileId
              ? { ...file, status: "success" as const, progress: 100 }
              : file
          )
        );
      } else {
        setFiles((prevFiles) =>
          prevFiles.map((file) =>
            file.id === fileId
              ? { ...file, progress: Math.min(progress, 100) }
              : file
          )
        );
      }
    }, 200);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (dragAndDrop && !disabled) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (disabled) return;

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      handleFiles(droppedFiles);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
      // Reset input
      e.target.value = "";
    }
  };

  const removeFile = (fileId: string) => {
    const fileToRemove = files.find((f) => f.id === fileId);
    if (fileToRemove && fileToRemove.preview) {
      URL.revokeObjectURL(fileToRemove.preview);
    }

    const updatedFiles = files.filter((f) => f.id !== fileId);
    setFiles(updatedFiles);
    onFilesRemoved?.([fileToRemove!]);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  const getFileIcon = (file: FileWithPreview) => {
    if (file.type.startsWith("image/")) {
      return null; // Will show preview instead
    }
    return <IconFile className="h-8 w-8 text-muted-foreground" />;
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Drop Zone */}
      {dragAndDrop && (
        <div
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "relative border-2 border-dashed rounded-lg p-8 text-center transition-colors",
            isDragging
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <input
            type="file"
            accept={accept}
            multiple={maxFiles > 1}
            onChange={handleFileInput}
            disabled={disabled || files.length >= maxFiles}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          />
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-muted p-4">
              <IconUpload className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">
                {isDragging
                  ? "Drop files here"
                  : "Drag and drop files here, or click to select"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {maxFiles > 1
                  ? `Up to ${maxFiles} files (max ${(maxSize / 1024 / 1024).toFixed(2)}MB each)`
                  : `Max file size: ${(maxSize / 1024 / 1024).toFixed(2)}MB`}
              </p>
              {accept !== "*/*" && (
                <p className="text-xs text-muted-foreground mt-1">
                  Accepted: {accept}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Traditional File Input (if drag and drop is disabled) */}
      {!dragAndDrop && (
        <div className="space-y-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              const input = document.createElement("input");
              input.type = "file";
              input.accept = accept;
              input.multiple = maxFiles > 1;
              input.onchange = (e) => {
                const target = e.target as HTMLInputElement;
                if (target.files) {
                  handleFiles(target.files);
                }
              };
              input.click();
            }}
            disabled={disabled || files.length >= maxFiles}
          >
            <IconUpload className="h-4 w-4" />
            Select Files
          </Button>
          <p className="text-xs text-muted-foreground">
            {maxFiles > 1
              ? `Up to ${maxFiles} files (max ${(maxSize / 1024 / 1024).toFixed(2)}MB each)`
              : `Max file size: ${(maxSize / 1024 / 1024).toFixed(2)}MB`}
          </p>
        </div>
      )}

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3">
          <p className="text-sm font-medium text-destructive mb-1">Errors:</p>
          <ul className="list-disc list-inside text-xs text-destructive space-y-1">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">
            Selected Files ({files.length}/{maxFiles})
          </p>
          <div className="space-y-2">
            {files.map((file) => (
              <div
                key={file.id}
                className="border rounded-lg p-4 space-y-3"
              >
                <div className="flex items-start gap-4">
                  {/* Preview or Icon */}
                  {showPreview && file.type.startsWith("image/") && file.preview ? (
                    <div className="relative w-16 h-16 rounded overflow-hidden border shrink-0">
                      <img
                        src={file.preview}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded border flex items-center justify-center shrink-0">
                      {getFileIcon(file)}
                    </div>
                  )}

                  {/* File Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatFileSize(file.size)}
                        </p>
                        {file.status && (
                          <div className="flex items-center gap-2 mt-2">
                            {file.status === "success" && (
                              <div className="flex items-center gap-1 text-xs text-green-600">
                                <IconCheck className="h-3 w-3" />
                                Uploaded
                              </div>
                            )}
                            {file.status === "uploading" && (
                              <div className="flex items-center gap-1 text-xs text-blue-600">
                                Uploading...
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => removeFile(file.id)}
                        disabled={disabled}
                        className="shrink-0"
                      >
                        <IconX className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Progress Bar */}
                    {showProgress && file.status === "uploading" && file.progress !== undefined && (
                      <div className="mt-2">
                        <Progress value={file.progress} className="h-2" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

