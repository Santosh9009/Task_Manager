import React from 'react';
import { TaskType } from '@/Types/task';

interface TaskItemProps {
  task: TaskType;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  // Set priority colors for better UI representation
  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200 transition-transform duration-200 transform hover:scale-105">
      <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
      <p className="text-sm text-gray-700 mb-2">{task.description}</p>

      {/* Display Priority */}
      {task.priority && (
        <p className={`inline-block px-2 py-1 rounded-full border ${priorityColors[task.priority]} text-xs font-semibold`}>
          Priority: {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </p>
      )}
    </div>
  );
};

export default TaskItem;
