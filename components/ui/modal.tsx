"use client";

import React, { useRef } from "react";
import { IconX } from "@tabler/icons-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ResizablePanel,
  ResizablePanelGroup,
  ResizableHandle,
} from "@/components/ui/resizable";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeByOverlay?: boolean;
  header?: string | React.ReactNode;
  wrapperClassName?: string;
  vailClassName?: string;
  overlayClassName?: string;
  animateType?: "horizantal" | "vertical";
  resizable?: boolean;
  defaultWidth?: number;
  minWidth?: number;
  maxWidth?: number;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  closeByOverlay = true,
  header,
  children,
  wrapperClassName,
  vailClassName,
  animateType = "horizantal",
  overlayClassName,
  resizable = true,
  defaultWidth = 480,
  minWidth = 480,
  maxWidth = 1400,
}) => {
  const isMobile = useIsMobile();
  const drawerRef = useRef<HTMLDivElement>(null);

  const innerWidth = typeof window !== "undefined" ? window.innerWidth : 0;

  const defaultPercentage = React.useMemo(() => {
    const percentage = (defaultWidth / innerWidth) * 100;
    return Math.min(Math.max(percentage, 30), 80);
  }, [defaultWidth, innerWidth]);

  const minPercentage = React.useMemo(
    () => (minWidth / innerWidth) * 100,
    [minWidth, innerWidth]
  );
  const maxPercentage = React.useMemo(
    () => (maxWidth / innerWidth) * 100,
    [maxWidth, innerWidth]
  );

  React.useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  const renderPanelContent = () => (
    <div
      ref={drawerRef}
      className={cn(
        "dark:bg-sidebar h-full w-full overflow-y-auto bg-white px-2",
        wrapperClassName
      )}
    >
      <div className="closeButton dark:bg-sidebar sticky top-0 z-10 flex w-full items-center bg-white py-4">
        <div className="font-medium">{header}</div>
        <SheetClose asChild>
          <Button
            // className="ml-auto bg-border rounded-full w-8 h-8 p-2 text-gray-500 hover:bg-border/80 hover:text-gray-700 dark:bg-transparent dark:hover:bg-transparent"
            variant="secondary"
            size="icon"
            type="button"
            className="ml-auto"
          >
            <IconX className="size-5" />
          </Button>
        </SheetClose>
      </div>
      <div className="">{children}</div>
    </div>
  );

  const desktopContent = resizable ? (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full border-none shadow-none"
    >
      <ResizablePanel
        defaultSize={100 - defaultPercentage}
        minSize={20 - maxPercentage}
        onClick={() => handleOpenChange(false)}
        className="border-none shadow-none"
      >
        <div className="h-full w-full" />
      </ResizablePanel>

      {resizable && <ResizableHandle withHandle />}

      <ResizablePanel
        defaultSize={defaultPercentage}
        minSize={minPercentage}
        maxSize={maxPercentage}
        className="border-none shadow-none"
      >
        {renderPanelContent()}
      </ResizablePanel>
    </ResizablePanelGroup>
  ) : (
    renderPanelContent()
  );

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const side = animateType === "vertical" ? "bottom" : "right";

  const titleText =
    typeof header === "string" ? header : header ? "Modal" : "Modal";

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent
        side={side}
        className={cn(
          "z-100 flex h-full w-full max-w-full bg-transparent p-0 !border-0 !shadow-none",
          { "sm:max-w-full": resizable }
        )}
        overlayProps={{
          className: cn("bg-primary/20", vailClassName, overlayClassName),
        }}
        hideCloseButton
        onInteractOutside={
          closeByOverlay ? undefined : (event) => event.preventDefault()
        }
      >
        <SheetTitle className="sr-only">{titleText}</SheetTitle>
        {isMobile ? renderPanelContent() : desktopContent}
      </SheetContent>
    </Sheet>
  );
};
