"use client";
import React, { useEffect } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import TaskItem from "./TaskItem";
import { useTasks } from "@/hooks/useTask"; // Adjust the path as necessary
import { toast } from "@/hooks/use-toast";
import { debounce } from 'lodash';

const DraggableTask = ({ task }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: task._id,
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`mb-4 transition-transform duration-200 rounded-lg shadow-lg ${
        isDragging ? "opacity-70" : "bg-white"
      }`}
      style={isDragging ? { transform: "scale(1.03)" } : undefined}
    >
      <TaskItem task={task} />
    </div>
  );
};

const DroppableColumn = ({ status, tasks }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: status,
  });

  return (
    <div
      ref={setNodeRef}
      className={`w-1/3 p-4 rounded-lg transition-colors duration-200 ${
        isOver ? "bg-blue-200 border-blue-500" : "bg-gray-100 border-gray-300"
      }`}
    >
      <h3 className="text-xl font-semibold mb-4">{status}</h3>
      {tasks.map((task) => (
        <DraggableTask key={task._id} task={task} />
      ))}
      {isOver && (
        <div className="border-dashed border-2 border-blue-500 h-12 rounded-lg mt-4"></div>
      )}
    </div>
  );
};

const KanbanBoard = () => {
  const { tasks, loadTasks, updateTask, loading } = useTasks();

  useEffect(() => {
    const fetchTasks = async () => {
      await loadTasks(); // Fetch tasks on mount
    };

    fetchTasks();
  }, []);

  const debouncedUpdateTask = debounce((task) => updateTask(task), 300);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) { // Ensure dragging to a different column
      const taskToUpdate = tasks.find((task) => task._id === active.id);
      if (taskToUpdate) {
        const updatedTask = {
          ...taskToUpdate,
          status: over.id,
        };

        debouncedUpdateTask(updatedTask); // Use debounced update
        toast({
          title: "Success",
          description: "Task moved successfully!",
        });
      }
    }
  };

  const columns = {
    "To Do": tasks.filter((task) => task.status === "To Do"),
    "In Progress": tasks.filter((task) => task.status === "In Progress"),
    Completed: tasks.filter((task) => task.status === "Completed"),
  };

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex justify-between text-black h-screen">
          {Object.entries(columns).map(([status]) => (
            <DroppableColumn
              key={status}
              status={status}
              tasks={columns[status]}
            />
          ))}
        </div>
      </DndContext>
      {loading && <p>Loading tasks...</p>}
    </>
  );
};

export default KanbanBoard;
