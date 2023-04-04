import { Router } from 'express';
import matchesController from '../controllers/matches.controller';
import { validToken } from '../middlewares/validLogin';

const matchesRouter = Router();

matchesRouter.get('/', matchesController.matchesInProgress);
matchesRouter.patch('/:id/finish', validToken, matchesController.matchesFinish);
matchesRouter.patch('/:id', validToken, matchesController.matchesProgress);
matchesRouter.post('/', validToken, matchesController.postMatchesInProgress);

export default matchesRouter;
