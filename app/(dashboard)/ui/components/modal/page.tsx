"use client";

import { useState } from "react";
import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  return (
    <ShowcaseLayout
      title="Modal"
      description="Modal dialog component examples."
    >
      <ShowcaseSection title="Basic Modal" description="Simple modal dialog">
        <div className="space-y-4">
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Modal Title</h2>
              <p className="text-muted-foreground">
                This is a basic modal dialog. You can put any content here.
              </p>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsOpen(false)}>Confirm</Button>
              </div>
            </div>
          </Modal>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Modal with Form"
        description="Modal containing a form"
      >
        <div className="space-y-4">
          <Button onClick={() => setIsConfirmOpen(true)}>
            Open Form Modal
          </Button>
          <Modal isOpen={isConfirmOpen} onClose={() => setIsConfirmOpen(false)}>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Create New Item</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="modal-name">Name</Label>
                  <Input id="modal-name" placeholder="Enter name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="modal-email">Email</Label>
                  <Input id="modal-email" type="email" placeholder="Enter email" />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsConfirmOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsConfirmOpen(false)}>Create</Button>
              </div>
            </div>
          </Modal>
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}

