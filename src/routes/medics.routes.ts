import { Router } from 'express';

const medicsRouter = Router();

medicsRouter.get('/', async (request, response) => response.send());

export default medicsRouter;
