import express from 'express';
import cors from 'cors';

import taskRouter from './src/routers/taskRouter.js';

const app = express();
const PORT = 8000;

// Middlewares
app.use(express.json());

// Task router
app.use('/api/v1/task', taskRouter);

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Server is running healthy.',
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
