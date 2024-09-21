'use client'
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TaskType } from "@/Types/task";

// Type definition for the props
type EditTaskSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  task: TaskType | null;
  onSubmitEdit: (updatedTask: TaskType) => void;
};

const EditTask = ({ isOpen, onClose, task, onSubmitEdit }: EditTaskSheetProps) => {
  const [updatedTask, setUpdatedTask] = useState<TaskType | null>(null);

  useEffect(() => {
    setUpdatedTask(task);
  }, [task]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTask({
      ...updatedTask!,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (field: keyof TaskType, value: string) => {
    setUpdatedTask((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleSave = () => {
    if (updatedTask) {
      onSubmitEdit(updatedTask);
    }
  };

  if (!updatedTask) return null; // Ensure the form renders only if there's a task

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="bg-gray-50 text-gray-800">
        <SheetHeader>
          <SheetTitle className="text-gray-900">Edit Task</SheetTitle>
        </SheetHeader>
        <div className="space-y-4 p-4">
          {/* Title */}
          <input
            name="title"
            value={updatedTask?.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="input border border-gray-300 rounded-lg p-2 w-full bg-white text-gray-900"
          />

          {/* Description */}
          <input
            name="description"
            value={updatedTask?.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="input border border-gray-300 rounded-lg p-2 w-full bg-white text-gray-900"
          />

          {/* Status */}
          <Select
            onValueChange={(value) => handleSelectChange("status", value)}
            value={updatedTask?.status}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="To Do">To Do</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
          </Select>

          {/* Priority */}
          <Select
            onValueChange={(value) => handleSelectChange("priority", value)}
            value={updatedTask?.priority}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>

          {/* Save Button */}
          <Button
            variant={"default"}
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Save Changes
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default EditTask;
