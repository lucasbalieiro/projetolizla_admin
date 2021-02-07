import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const AuthenticateUser = new AuthenticateUserService();

  const { user, token } = await AuthenticateUser.execute({ email, password });

  const userWithoutPassword = {
    name: user.name,
    token,
  };

  return response.json({ userWithoutPassword });
});

export default sessionsRouter;
