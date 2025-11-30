export type StatTrend = "up" | "down";

export type StatCard = {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: StatTrend;
};

export type RevenuePoint = {
  date: string;
  revenue: number;
};

export type ActivityItem = {
  id: string;
  title: string;
  time: string;
  status: "success" | "pending" | "alert";
  description: string;
};

export type QuickAction = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export type DashboardData = {
  stats: StatCard[];
  revenueTrend: RevenuePoint[];
  activity: ActivityItem[];
  quickActions: QuickAction[];
};


