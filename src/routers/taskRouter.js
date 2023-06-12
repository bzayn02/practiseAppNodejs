import express from 'express';

const router = express.Router();

let fakeTasks = [
  { id: '122', task: 'Cooking', hour: 33, type: 'entry' },
  { id: '121', task: 'Coding', hour: 33, type: 'entry' },
];

router.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Here are the tasks',
    tasks: fakeTasks,
  });
});

router.post('/', (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    fakeTasks.push(data)
      ? res.json({
          status: 'success',
          message: 'Data has been added to array',
          newData: fakeTasks,
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
  } catch (error) {}
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
