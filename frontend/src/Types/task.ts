export interface TaskType {
  _id?: string;
  user?: string;
  title: string;
  description: string;
  priority?: 'low' | 'medium' | 'high';
  status?: 'To Do' | 'In Progress' | 'Completed';
}
