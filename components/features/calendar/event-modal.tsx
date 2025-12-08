"use client";

import { useState, useEffect } from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/ui/modal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { CalendarEvent } from "@/lib/types/calendar";
import { format } from "date-fns";

type EventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  event?: CalendarEvent | null;
  slotInfo?: { start: Date; end: Date } | null;
  onSubmit: (event: Omit<CalendarEvent, "id">) => void;
  onDelete?: (eventId: string) => void;
};

export function EventModal({
  isOpen,
  onClose,
  event,
  slotInfo,
  onSubmit,
  onDelete,
}: EventModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    start: slotInfo?.start || new Date(),
    end: slotInfo?.end || new Date(),
    allDay: false,
    location: "",
  });

  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title,
        description: event.description || "",
        start: event.start,
        end: event.end,
        allDay: event.allDay || false,
        location: event.location || "",
      });
    } else if (slotInfo) {
      setFormData({
        title: "",
        description: "",
        start: slotInfo.start,
        end: slotInfo.end,
        allDay: false,
        location: "",
      });
    }
  }, [event, slotInfo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      return;
    }

    onSubmit({
      title: formData.title.trim(),
      description: formData.description.trim() || undefined,
      start: formData.start,
      end: formData.end,
      allDay: formData.allDay,
      location: formData.location.trim() || undefined,
    });

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      header={event ? "Edit Event" : "Create Event"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="Event title"
            autoFocus
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            placeholder="Event description"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="start">Start</Label>
            <Input
              id="start"
              type="datetime-local"
              value={format(formData.start, "yyyy-MM-dd'T'HH:mm")}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  start: new Date(e.target.value),
                }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="end">End</Label>
            <Input
              id="end"
              type="datetime-local"
              value={format(formData.end, "yyyy-MM-dd'T'HH:mm")}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  end: new Date(e.target.value),
                }))
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, location: e.target.value }))
            }
            placeholder="Event location"
          />
        </div>

        {event && event.attendees && event.attendees.length > 0 && (
          <div className="space-y-2">
            <Label>Attendees</Label>
            <div className="flex flex-wrap gap-2">
              {event.attendees.map((attendee) => (
                <div
                  key={attendee.id}
                  className="flex items-center gap-2 rounded-lg border bg-muted px-3 py-2"
                >
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={attendee.avatar} alt={attendee.name} />
                    <AvatarFallback className="text-xs">
                      {attendee.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{attendee.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between pt-4">
          <div>
            {event && onDelete && (
              <Button
                type="button"
                variant="destructive"
                onClick={() => {
                  onDelete(event.id);
                  onClose();
                }}
              >
                Delete
              </Button>
            )}
          </div>
          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">{event ? "Save Changes" : "Create Event"}</Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

