import { Request, Response } from 'express';
import Task, { TaskType } from '../models/Task';

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await Task.find({ user: req.user?._id });
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { title, description, priority } = req.body;
  const task: TaskType = new Task({ user: req.user?._id, title, description, priority });
  await task.save();
  res.status(201).json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.priority = req.body.priority || task.priority;
  task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;

  await task.save();
  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  await task.deleteOne();
  res.json({ message: 'Task removed' });
};
