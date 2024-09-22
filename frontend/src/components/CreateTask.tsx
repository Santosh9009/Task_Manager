"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TaskType } from "@/Types/task";

interface CreateTaskProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitCreate: (newTask: Omit<TaskType, "_id">) => void;
}

const CreateTask: React.FC<CreateTaskProps> = ({ isOpen, onClose, onSubmitCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"To Do" | "In Progress" | "Completed">("To Do");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low");

  const handleSubmit = () => {
    if (title.trim() === "" || description.trim() === "") return;

    const newTask: Omit<TaskType, "_id"> = {
      title,
      description,
      status,
      priority,
    };

    onSubmitCreate(newTask);
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setStatus("To Do");
    setPriority("low");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-gray-800"> 
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full" 
          />
          <Textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full" 
          />

          <Select
            onValueChange={(value) => setStatus(value as "To Do" | "In Progress" | "Completed")}
            value={status}
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

          <Select
            onValueChange={(value) => setPriority(value as "low" | "medium" | "high")}
            value={priority}
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
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="bg-blue-500 text-white">
            Create Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTask;
