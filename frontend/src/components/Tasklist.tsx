"use client";
import React, { useEffect, useState } from "react";
import { useTasks } from "@/hooks/useTask";
import { DataTable } from "@/app/(root)/tasklist/data-table";
import { TaskType } from "@/Types/task";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import EditTask from "./EditTask";
import DeleteAlert from "./DeleteAlert";
import { columns } from "@/app/(root)/tasklist/column";
import { Loader2 } from "lucide-react";
import CreateTask from "./CreateTask"; // Import the CreateTask component

const TaskList = () => {
  const { tasks, loadTasks, deleteTask, updateTask, createTask, loading } = useTasks();
  const [filteredTasks, setFilteredTasks] = useState<TaskType[]>([]);
  const [filter, setFilter] = useState({ status: "All", priority: "All" });
  const [taskToDelete, setTaskToDelete] = useState<TaskType | null>(null);
  const [taskToEdit, setTaskToEdit] = useState<TaskType | null>(null);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isEditSheetOpen, setIsEditSheetOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false); 

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    let filtered = tasks;
    if (filter.status !== "All")
      filtered = filtered.filter(
        (task: TaskType) => task.status === filter.status
      );
    if (filter.priority !== "All")
      filtered = filtered.filter(
        (task: TaskType) => task.priority === filter.priority
      );
    setFilteredTasks(filtered);
  }, [tasks, filter]);

  const handleDeleteTask = async () => {
    if (taskToDelete?._id) {
      await deleteTask(taskToDelete._id);
      setFilteredTasks((prevTasks) =>
        prevTasks.filter((task) => task._id !== taskToDelete._id)
      );
      setIsDeleteDialogOpen(false);
    }
  };

  const handleEditTask = async (updatedTask: TaskType) => {
    await updateTask(updatedTask);
    setFilteredTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === updatedTask._id ? updatedTask : task
      )
    );
    setIsEditSheetOpen(false);
  };

  // Function to open the Edit sheet and set the task to be edited
  const openEditSheet = (task: TaskType) => {
    setTaskToEdit(task);
    setIsEditSheetOpen(true);
  };


  const handleCreateTask = async (newTask: Omit<TaskType, "_id">) => {
    await createTask(newTask);
    setFilteredTasks([...filteredTasks, { ...newTask, _id: Date.now().toString() }]);
    setIsCreateDialogOpen(false);
  };

  return (
    <div className="text-black p-5">
      <div className="flex justify-between">
        {/* Filters */}
        <div className="mb-4 flex space-x-4">
          <Select
            onValueChange={(value) => setFilter({ ...filter, status: value })}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Statuses</SelectItem>
              <SelectItem value="To Do">To Do</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Select
            onValueChange={(value) => setFilter({ ...filter, priority: value })}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Priorities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Priorities</SelectItem>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          variant="default"
          className="bg-blue-500 text-white font-semibold"
          onClick={() => setIsCreateDialogOpen(true)} // Open the CreateTask dialog
        >
          Create Task
        </Button>
      </div>

      {/* Task List */}
      {!loading ? (
        <DataTable
          columns={columns({
            openEditSheet,
            setTaskToDelete,
            setIsDeleteDialogOpen,
          })}
          data={filteredTasks}
        />
      ) : (
        <div className="w-full h-screen flex justify-center items-start pt-36">
          <Loader2 className="animate-spin" />
        </div>
      )}

      {/* Delete Task Dialog */}
      <DeleteAlert
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirmDelete={handleDeleteTask}
        task={taskToDelete}
      />

      {/* Edit Task Sheet */}
      <EditTask
        isOpen={isEditSheetOpen}
        onClose={() => setIsEditSheetOpen(false)}
        task={taskToEdit}
        onSubmitEdit={handleEditTask}
      />

      {/* Create Task Dialog */}
      <CreateTask
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
        onSubmitCreate={handleCreateTask}
      />
    </div>
  );
};

export default TaskList;
