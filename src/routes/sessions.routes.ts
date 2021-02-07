import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const AuthenticateUser = new AuthenticateUserService();

    const { user, token } = await AuthenticateUser.execute({ email, password });

    const userWithoutPassword = {
      name: user.name,
      token,
    };

    return response.json({ userWithoutPassword });
  } catch (err) {
    return response.status(400).send({ error: err.message });
  }
});

export default sessionsRouter;
