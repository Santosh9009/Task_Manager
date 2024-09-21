'use client'
import { TaskType } from "@/Types/task";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash2 } from "lucide-react";

interface ColumnProps {
  openEditSheet: (task: TaskType) => void;
  setTaskToDelete: (task: TaskType) => void;
  setIsDeleteDialogOpen: (isOpen: boolean) => void;
}

// Define the columns for the tasks table
export const columns = ({
  openEditSheet,
  setTaskToDelete,
  setIsDeleteDialogOpen,
}: ColumnProps): ColumnDef<TaskType>[] => [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => (
      <span
        className={`${
          row.original.priority === "high"
            ? "text-red-500"
            : row.original.priority === "medium"
            ? "text-yellow-500"
            : "text-green-500"
        }`}
      >
        {row.original.priority}
      </span>
    ), // Color-coded priorities
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex space-x-5">
        <button
          className=" text-blue-500 hover:opacity-50"
          onClick={() => {
            openEditSheet(row.original); 
            console.log(row.original)
          }}
        >
          <Edit/>
        </button>
        <button
          className="text-red-500 hover:opacity-50"
          onClick={() => {
            setTaskToDelete(row.original); // Set the task to be deleted
            setIsDeleteDialogOpen(true);  // Open delete dialog
          }}
        >
          <Trash2/>
        </button>
      </div>
    ),
  },
];
