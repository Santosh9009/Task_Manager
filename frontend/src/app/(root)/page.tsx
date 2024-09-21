"use client"
import DashboardLayout from '@/components/Dashboard';
import KanbanBoard from '@/components/kanbanboard';

const KanbanPage = () => {
  return (
    <DashboardLayout>
      <KanbanBoard />
    </DashboardLayout>
  );
};

export default KanbanPage;
