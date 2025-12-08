import { UserRecord } from "@/lib/types/users";

/**
 * Mock user data for development and demo purposes
 */

const formatLastActive = (date: Date | undefined): string => {
  if (!date) return "—";
  
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  return `${Math.floor(diffDays / 30)}mo ago`;
};

export const mockUsers: UserRecord[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@antpanel.dev",
    avatar: "/avatars/shadcn.jpg",
    role: "Admin",
    status: "active",
    lastActive: formatLastActive(new Date(Date.now() - 2 * 60 * 60 * 1000)),
    location: "New York, US",
    plan: "Enterprise",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@antpanel.dev",
    avatar: "/avatars/shadcn.jpg",
    role: "Editor",
    status: "active",
    lastActive: formatLastActive(new Date(Date.now() - 5 * 60 * 60 * 1000)),
    location: "San Francisco, US",
    plan: "Pro",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob.johnson@antpanel.dev",
    avatar: "/avatars/shadcn.jpg",
    role: "Editor",
    status: "active",
    lastActive: formatLastActive(new Date(Date.now() - 24 * 60 * 60 * 1000)),
    location: "London, UK",
    plan: "Growth",
  },
  {
    id: "4",
    name: "Alice Williams",
    email: "alice.williams@antpanel.dev",
    avatar: "/avatars/shadcn.jpg",
    role: "Viewer",
    status: "active",
    lastActive: formatLastActive(new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)),
    location: "Toronto, CA",
    plan: "Starter",
  },
  {
    id: "5",
    name: "Charlie Brown",
    email: "charlie.brown@antpanel.dev",
    avatar: "/avatars/shadcn.jpg",
    role: "Editor",
    status: "disabled",
    lastActive: formatLastActive(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)),
    location: "Sydney, AU",
    plan: "Legacy",
  },
  {
    id: "6",
    name: "Diana Prince",
    email: "diana.prince@antpanel.dev",
    avatar: "/avatars/shadcn.jpg",
    role: "Editor",
    status: "active",
    lastActive: formatLastActive(new Date(Date.now() - 12 * 60 * 60 * 1000)),
    location: "Paris, FR",
    plan: "Pro",
  },
  {
    id: "7",
    name: "Edward Norton",
    email: "edward.norton@antpanel.dev",
    avatar: "/avatars/shadcn.jpg",
    role: "Admin",
    status: "active",
    lastActive: formatLastActive(new Date(Date.now() - 1 * 60 * 60 * 1000)),
    location: "Berlin, DE",
    plan: "Enterprise",
  },
  {
    id: "8",
    name: "Fiona Apple",
    email: "fiona.apple@antpanel.dev",
    avatar: "/avatars/shadcn.jpg",
    role: "Viewer",
    status: "disabled",
    lastActive: formatLastActive(new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)),
    location: "Tokyo, JP",
    plan: "Starter",
  },
  {
    id: "9",
    name: "George Clooney",
    email: "george.clooney@antpanel.dev",
    avatar: "/avatars/shadcn.jpg",
    role: "Editor",
    status: "active",
    lastActive: formatLastActive(new Date(Date.now() - 6 * 60 * 60 * 1000)),
    location: "Dubai, AE",
    plan: "Growth",
  },
  {
    id: "10",
    name: "Helen Mirren",
    email: "helen.mirren@antpanel.dev",
    avatar: "/avatars/shadcn.jpg",
    role: "Editor",
    status: "active",
    lastActive: formatLastActive(new Date(Date.now() - 4 * 60 * 60 * 1000)),
    location: "Mumbai, IN",
    plan: "Pro",
  },
  {
    id: "11",
    name: "Ian McKellen",
    email: "ian.mckellen@antpanel.dev",
    avatar: "/avatars/shadcn.jpg",
    role: "Admin",
    status: "active",
    lastActive: formatLastActive(new Date(Date.now() - 8 * 60 * 60 * 1000)),
    location: "Singapore, SG",
    plan: "Enterprise",
  },
  {
    id: "12",
    name: "Julia Roberts",
    email: "julia.roberts@antpanel.dev",
    avatar: "/avatars/shadcn.jpg",
    role: "Viewer",
    status: "invited",
    lastActive: "—",
    location: "São Paulo, BR",
    plan: "Starter",
  },
];

/**
 * Generate additional mock users
 */
export function generateMockUsers(count: number): UserRecord[] {
  const firstNames = [
    "Alex", "Blake", "Casey", "Drew", "Emery", "Finley", "Gray", "Harper",
    "Jordan", "Kai", "Logan", "Morgan", "Parker", "Quinn", "Riley", "Sage",
    "Taylor", "Val", "Winter", "Zion"
  ];
  const lastNames = [
    "Anderson", "Brown", "Davis", "Garcia", "Harris", "Jackson", "Johnson",
    "Jones", "Lee", "Martinez", "Miller", "Moore", "Robinson", "Smith",
    "Taylor", "Thomas", "Thompson", "Walker", "White", "Williams"
  ];
  const locations = [
    "New York, US", "Los Angeles, US", "Chicago, US", "London, UK",
    "Paris, FR", "Berlin, DE", "Tokyo, JP", "Sydney, AU", "Toronto, CA",
    "Mumbai, IN", "São Paulo, BR", "Singapore, SG", "Dubai, AE"
  ];
  const plans = ["Enterprise", "Pro", "Growth", "Starter", "Legacy"];
  const roles: UserRecord["role"][] = ["Owner", "Admin", "Editor", "Viewer"];
  const statuses: UserRecord["status"][] = ["active", "invited", "disabled"];

  const users: UserRecord[] = [];
  const startId = mockUsers.length + 1;

  for (let i = 0; i < count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@antpanel.dev`;
    const lastLogin = Math.random() > 0.3 
      ? new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
      : undefined;

    users.push({
      id: `usr-${startId + i}`,
      name: `${firstName} ${lastName}`,
      email,
      avatar: "/avatars/shadcn.jpg",
      role: roles[Math.floor(Math.random() * roles.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      lastActive: formatLastActive(lastLogin),
      location: locations[Math.floor(Math.random() * locations.length)],
      plan: plans[Math.floor(Math.random() * plans.length)],
    });
  }

  return users;
}

/**
 * Get all mock users
 */
export function getAllMockUsers(): UserRecord[] {
  return [...mockUsers, ...generateMockUsers(20)];
}

