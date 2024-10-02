import { useState } from 'react';
import { AppDispatch, RootState } from '@/lib/store';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, fetchTasks, modifyTask, removeTask } from '../lib/slices/taskSlice';
import { TaskType } from '@/Types/task';


// Add loading state
export const useTasks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tasksState = useSelector((state: RootState) => state.tasks);
  const [loading, setLoading] = useState(false);

  const loadTasks = async () => {
    setLoading(true);
    try {
      await dispatch(fetchTasks());
    } catch (error) {
      console.log("Unable to load tasks"+error)
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (task: TaskType) => {
    setLoading(true);
    try {
      await dispatch(addTask(task));
    } catch (error) {
      console.log("Unable to create tasks"+error)
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (task: TaskType) => {
    setLoading(true);
    try {
      await dispatch(modifyTask(task));
    } catch (error) {
      console.log("Unable to modify tasks"+error)
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id: string | undefined) => {
    setLoading(true);
    try {
      await dispatch(removeTask(id));
    } catch (error) {
      console.log("Unable to delete tasks"+error)
    } finally {
      setLoading(false);
    }
  };

  return { ...tasksState, loadTasks, createTask, updateTask, deleteTask, loading };
};
