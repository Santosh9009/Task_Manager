"use client";
import DashboardLayout from "@/components/Dashboard";
import KanbanBoard from "@/components/kanbanboard";
export default function Home() {
  return (
    <div>
      <DashboardLayout>
        <KanbanBoard />
      </DashboardLayout>
    </div>
  );
}
