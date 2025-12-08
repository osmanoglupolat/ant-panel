"use client";

import { useState } from "react";
import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  IconBold,
  IconItalic,
  IconUnderline,
  IconList,
  IconListNumbers,
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
  IconLink,
  IconPhoto,
  IconCode,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

// Rich Text Editor Component
function RichTextEditor({
  placeholder = "Start typing...",
  value,
  onChange,
  className,
}: {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  const [isFocused, setIsFocused] = useState(false);

  const toolbarButtons = [
    { icon: IconBold, label: "Bold", action: "bold" },
    { icon: IconItalic, label: "Italic", action: "italic" },
    { icon: IconUnderline, label: "Underline", action: "underline" },
    { icon: IconList, label: "Bullet List", action: "insertUnorderedList" },
    { icon: IconListNumbers, label: "Numbered List", action: "insertOrderedList" },
    { icon: IconAlignLeft, label: "Align Left", action: "justifyLeft" },
    { icon: IconAlignCenter, label: "Align Center", action: "justifyCenter" },
    { icon: IconAlignRight, label: "Align Right", action: "justifyRight" },
    { icon: IconLink, label: "Insert Link", action: "createLink" },
    { icon: IconPhoto, label: "Insert Image", action: "insertImage" },
    { icon: IconCode, label: "Code Block", action: "formatBlock" },
  ];

  const handleFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    // Trigger input event to update state
    const event = new Event("input", { bubbles: true });
    document.dispatchEvent(event);
  };

  return (
    <div className={cn("space-y-2", className)}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 border rounded-lg p-2 bg-muted/30">
        {toolbarButtons.map((btn) => {
          const Icon = btn.icon;
          return (
            <Button
              key={btn.action}
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => handleFormat(btn.action)}
              title={btn.label}
              className="h-8 w-8"
            >
              <Icon className="h-4 w-4" />
            </Button>
          );
        })}
      </div>

      {/* Editor Area */}
      <div
        className={cn(
          "border rounded-lg min-h-[200px] p-4 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          isFocused && "ring-2 ring-ring ring-offset-2"
        )}
      >
        <Textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="min-h-[150px] border-0 focus-visible:ring-0 resize-none"
        />
      </div>

      {/* Character Count */}
      <div className="flex justify-between items-center text-xs text-muted-foreground">
        <span>{value.length} characters</span>
        <span>{value.split(/\s+/).filter(Boolean).length} words</span>
      </div>
    </div>
  );
}

// Markdown Editor Component
function MarkdownEditor({
  value,
  onChange,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Markdown Input</Label>
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="# Heading&#10;&#10;**Bold text**&#10;&#10;*Italic text*&#10;&#10;- List item 1&#10;- List item 2"
            className="min-h-[300px] font-mono text-sm"
          />
        </div>
        <div className="space-y-2">
          <Label>Preview</Label>
          <div className="border rounded-lg p-4 min-h-[300px] bg-muted/30">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              {value ? (
                <div className="whitespace-pre-wrap">
                  {value
                    .replace(/#{6}\s(.+)/g, '<h6>$1</h6>')
                    .replace(/#{5}\s(.+)/g, '<h5>$1</h5>')
                    .replace(/#{4}\s(.+)/g, '<h4>$1</h4>')
                    .replace(/#{3}\s(.+)/g, '<h3>$1</h3>')
                    .replace(/#{2}\s(.+)/g, '<h2>$1</h2>')
                    .replace(/#{1}\s(.+)/g, '<h1>$1</h1>')
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.+?)\*/g, '<em>$1</em>')
                    .replace(/`(.+?)`/g, '<code>$1</code>')
                    .replace(/^- (.+)$/gm, '<li>$1</li>')
                    .replace(/\n/g, '<br>')}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">
                  Markdown preview will appear here...
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-muted-foreground">
        <p>Supports: Headers (#), Bold (**text**), Italic (*text*), Code (`code`), Lists (- item)</p>
      </div>
    </div>
  );
}

export function EditorsShowcase() {
  const [richTextValue, setRichTextValue] = useState("");
  const [markdownValue, setMarkdownValue] = useState("");

  return (
    <ShowcaseLayout
      title="Editors"
      description="Rich text editor and markdown editor component examples."
    >
      <ShowcaseSection
        title="Rich Text Editor"
        description="WYSIWYG editor with formatting toolbar"
      >
        <Card>
          <CardHeader>
            <CardTitle>Rich Text Editor</CardTitle>
            <CardDescription>
              Full-featured rich text editor with formatting options
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RichTextEditor
              placeholder="Start typing your content here..."
              value={richTextValue}
              onChange={setRichTextValue}
            />
          </CardContent>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        title="Markdown Editor"
        description="Markdown editor with live preview"
      >
        <Card>
          <CardHeader>
            <CardTitle>Markdown Editor</CardTitle>
            <CardDescription>
              Markdown input with live preview pane
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MarkdownEditor
              value={markdownValue}
              onChange={setMarkdownValue}
            />
          </CardContent>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        title="Simple Textarea"
        description="Basic textarea component for simple text input"
      >
        <Card>
          <CardHeader>
            <CardTitle>Simple Textarea</CardTitle>
            <CardDescription>
              Standard textarea for basic text input
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                placeholder="Enter your description here..."
                className="min-h-[150px]"
              />
            </div>
          </CardContent>
        </Card>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}

