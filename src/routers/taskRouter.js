import express from 'express';
import {
  addTask,
  findTask,
  switchType,
  deleteTask,
} from '../model/TaskModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const taskList = await findTask();
  taskList._id
    ? res.json({
        status: 'success',
        message: 'Here are the tasks',
        taskLists: taskList,
      })
    : res.json({
        status: 'error',
        message: 'Unable to get the tasks',
      });
});

router.post('/', async (req, res) => {
  try {
    const data = await req.body;

    const result = await addTask(data);
    result._id
      ? res.json({
          status: 'success',
          message: 'New task has been added.',
        })
      : res.json({
          status: 'error',
          message: 'Unable to add data.',
        });
  } catch (error) {
    console.log(error.message);
  }

  //   taskList && fakeTasks.push(taskList);
});

router.patch('/', async (req, res) => {
  try {
    const { _id, type } = req.body;

    const result = await switchType(_id, type);

    result._id
      ? res.json({
          status: 'success',
          message: 'Task type has been updated.',
        })
      : res.json({
          status: 'error',
          message: 'Unable to update task type',
        });
    // Looping and changing the type by using spread operator for the item containing the id and returning the remaining itemsß
    // fakeTasks = fakeTasks.map((item) => {
    //   if (item.id === id) {
    //     return { ...item, type };
    //   }
    //   return item;
    // });
  } catch (error) {
    console.log(error.message);
  }
});

router.delete('/', async (req, res) => {
  try {
    const { _id } = req.body;
    const result = await deleteTask(_id);

    // Filtering the tasks that doesn't include the provided id
    // fakeTasks = fakeTasks.filter((item) => item.id !== id);

    result._id
      ? res.json({
          status: 'success',
          message: 'The task has been deleted.',
        })
      : res.json({
          status: 'error',
          message: 'Unable to delete the task.',
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: 'error',
      message: 'Unable to delete the task.',
    });
  }
});

export default router;
