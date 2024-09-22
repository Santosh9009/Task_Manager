import { TaskType } from '@/Types/task';
import axios from 'axios';

// Backend URL
const API_URL = 'http://localhost:8000/api/tasks';

// Fetch tasks
export const getTasks = async () => {
  const response = await axios.get(`${API_URL}/get`, {
    withCredentials: true, 
  });
  return response.data;
};

// Create a task
export const createTask = async (task: TaskType) => {
  const response = await axios.post(`${API_URL}/create`, task, {
    withCredentials: true, 
  });
  return response.data;
};

// Update a task
export const updateTask = async (id: string | undefined, task: TaskType) => {
  const response = await axios.put(`${API_URL}/${id}`, task, {
    withCredentials: true, 
  });
  return response.data;
};

// Delete a task
export const deleteTask = async (id: string | undefined) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    withCredentials: true, 
  });
  return response.data;
};
