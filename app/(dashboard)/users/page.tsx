import type { Metadata } from "next";

import { UsersPage } from "@/components/features/users/list-page";

export const metadata: Metadata = {
  title: "Users",
  description: "Manage workspace members, roles, and invitations. Add, edit, or remove team members and assign appropriate access levels.",
};

export default function Users() {
  return <UsersPage />;
}

