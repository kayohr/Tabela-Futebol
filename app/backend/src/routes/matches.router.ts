import { Router } from 'express';
import { validToken } from '../middlewares/validLogin';
import matchesController from '../controllers/matches.controller';

const matchesRouter = Router();

matchesRouter.get('/', matchesController.matchesInProgress);
matchesRouter.patch('/:id/finish', validToken, matchesController.matchesFinish);

export default matchesRouter;
