"use client"
import DashboardLayout from '@/components/Dashboard';
import TaskList from '@/components/Tasklist';

const TaskListPage = () => {
  return (
    <DashboardLayout>
      <TaskList />
    </DashboardLayout>
  );
};

export default TaskListPage;
