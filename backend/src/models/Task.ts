import mongoose, { Document, Schema } from 'mongoose';

export interface TaskType extends Document {
  user: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
}

const TaskSchema: Schema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'low' },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<TaskType>('Task', TaskSchema);
