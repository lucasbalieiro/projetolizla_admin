import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const {
    name, email, password, phoneNumber,
  } = request.body;
  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name, email, password, phoneNumber,
  });

  const userWithoutPassword = {
    id: user.id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
  };

  return response.json(userWithoutPassword);
});

export default usersRouter;
