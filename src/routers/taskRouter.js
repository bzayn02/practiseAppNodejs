import express from 'express';
import { addTask, findTask } from '../model/TaskModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const taskList = await findTask();
  res.json({
    status: 'success',
    message: 'Here are the tasks',
    taskLists: taskList,
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

router.patch('/', (req, res) => {
  try {
    const { id, type } = req.body;
    console.log(id, type);
    fakeTasks = fakeTasks.map((item) => {
      if (item.id === id) {
        return { ...item, type };
      }
      return item;
    });
    res.json({
      status: 'success',
      message: 'Task type updated.',
      updatedTasks: fakeTasks,
    });
  } catch (error) {
    console.log(error.message);
  }
});

router.delete('/', (req, res) => {
  try {
    const { id } = req.body;

    console.log(id);

    fakeTasks = fakeTasks.filter((item) => item.id !== id);
    res.json({
      status: 'success',
      message: 'The task has been deleted.',
      newTask: fakeTasks,
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
