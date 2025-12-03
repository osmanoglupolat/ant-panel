import type { Metadata } from "next";

import { UsersPage } from "@/components/features/users/list-page";

export const metadata: Metadata = {
  title: "Users",
  description: "Manage workspace members, roles, and invitations.",
};

export default function Users() {
  return <UsersPage />;
}

