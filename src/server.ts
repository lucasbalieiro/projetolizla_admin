import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import routes from './routes';
import './database';
import AppError from './errors/AppError';

const app = express();
app.use(express.json());

app.use(routes);

app.get('/', (_request, response) => response.json('API - Projeto Lizla v1.0'));

app.use((
  err: Error,
  _request: Request,
  response: Response,
  _next: NextFunction,
) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }
  return response
    .status(500)
    .json({ status: 'error', message: 'Internal Server Error' });
});

app.listen(process.env.PORT || 3333, () => {
  // eslint-disable-next-line no-console
  console.log('Backend started');
});

export default app;
