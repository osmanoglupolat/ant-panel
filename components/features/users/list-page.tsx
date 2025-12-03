"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dashboardData } from "@/lib/mocks/dashboard";
import type { UserRecord } from "@/lib/types/users";

import { columns } from "./columns";

export function UsersPage() {
  const { users } = dashboardData;
  const [selectedUser, setSelectedUser] = useState<UserRecord | null>(null);

  const closeModal = () => setSelectedUser(null);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-semibold tracking-tight">Team members</h1>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Invite user
        </Button>
      </div>

      <DataTable
        data={users}
        columns={columns}
        onRowClick={(row) => setSelectedUser(row.original as UserRecord)}
      />

      <Modal
        isOpen={Boolean(selectedUser)}
        onClose={closeModal}
        header={"Edit user"}
      >
        {selectedUser && (
          <form
            className="flex flex-col gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              closeModal();
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="userName">Name</Label>
              <Input id="userName" defaultValue={selectedUser.name} autoFocus />
            </div>
            <div className="space-y-2">
              <Label htmlFor="userEmail">Email</Label>
              <Input
                id="userEmail"
                defaultValue={selectedUser.email}
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="userRole">Role</Label>
              <Select defaultValue={selectedUser.role}>
                <SelectTrigger id="userRole">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Owner">Owner</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Editor">Editor</SelectItem>
                  <SelectItem value="Viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="userStatus">Status</Label>
              <Select defaultValue={selectedUser.status}>
                <SelectTrigger id="userStatus">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="invited">Invited</SelectItem>
                  <SelectItem value="disabled">Disabled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button type="submit" className="col-span-1">
                Save changes
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={closeModal}
                className="col-span-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}
