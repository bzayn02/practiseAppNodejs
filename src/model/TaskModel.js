import TaskSchema from './TaskSchema.js';

export const addTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

export const findTask = () => {
  return TaskSchema.find();
};

export const switchType = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, { type });
};

export const deleteTask = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};
