"use client"
import React, { useState } from 'react';
import { TaskType } from '@/Types/task';

interface TaskFormProps {
  onSubmit: (task: TaskType) => void;
  existingTask?: TaskType;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, existingTask }) => {
  const [title, setTitle] = useState(existingTask?.title || '');
  const [description, setDescription] = useState(existingTask?.description || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ _id: existingTask?._id || Date.now().toString(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      />
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
