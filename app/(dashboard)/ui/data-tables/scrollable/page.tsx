"use client";

import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import { DataTable } from "@/components/ui/data-table";
import { dashboardData } from "@/lib/mocks/dashboard";
import { columns } from "@/components/features/users/columns";
import { Card } from "@/components/ui/card";

export default function ScrollableDataTablePage() {
  return (
    <ShowcaseLayout
      title="Scrollable Data Table"
      description="Data table with fixed header and scrollable body."
    >
      <ShowcaseSection
        title="Scrollable Table"
        description="Table with horizontal and vertical scrolling"
      >
        <Card>
          <div className="max-h-[600px] overflow-auto">
            <DataTable columns={columns} data={dashboardData.users} />
          </div>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        title="Fixed Header Table"
        description="Table with sticky header while scrolling"
      >
        <div className="max-h-[500px] overflow-auto border rounded-lg">
          <table className="w-full">
            <thead className="sticky top-0 bg-background border-b z-10">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Email</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Role</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 50 }).map((_, i) => (
                <tr key={i} className="border-b">
                  <td className="px-4 py-3 text-sm">User {i + 1}</td>
                  <td className="px-4 py-3 text-sm">user{i + 1}@example.com</td>
                  <td className="px-4 py-3 text-sm">Editor</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="rounded-full bg-emerald-500/10 text-emerald-600 px-2 py-1 text-xs">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}

