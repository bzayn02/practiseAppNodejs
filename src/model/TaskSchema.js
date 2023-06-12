import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  hour: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
    default: 'entry',
  },
});

export default model('TaskList', taskSchema);
