import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTasks, createTask, updateTask, deleteTask } from '@/services/tasks/Taskapi';
import { TaskType } from '@/Types/task';

interface TasksState {
  tasks: TaskType[];
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  status: 'idle',
  error: null,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const tasks = await getTasks();
  return tasks;
});

export const addTask = createAsyncThunk('tasks/addTask', async (task: TaskType) => {
  const newTask = await createTask(task);
  return newTask;
});

export const modifyTask = createAsyncThunk('tasks/modifyTask', async (task: TaskType) => {
  const updatedTask = await updateTask(task._id, task);
  return updatedTask;
});

export const removeTask = createAsyncThunk('tasks/removeTask', async (id: string | undefined) => {
  await deleteTask(id);
  return id;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch tasks';
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(modifyTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(task => task._id === action.payload._id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task._id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;
