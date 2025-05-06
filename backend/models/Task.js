// backend/models/Task.js
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: Date,
  assignedTo: String,
  status: { type: String, enum: ['Pending', 'In Progress', 'Done'], default: 'Pending' },
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);
