import TaskSchema from './TaskSchema.js';

export const addTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

export const findTask = () => {
  return TaskSchema.find();
};
