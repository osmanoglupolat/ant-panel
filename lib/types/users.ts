export type UserRole = "Owner" | "Admin" | "Editor" | "Viewer";
export type UserStatus = "active" | "invited" | "disabled";

export type UserRecord = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  lastActive: string;
  avatar?: string;
  location?: string;
  plan?: string;
};

