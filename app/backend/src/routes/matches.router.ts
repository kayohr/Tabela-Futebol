import { Router } from 'express';
import matchesController from '../controllers/matches.controller';
import { validToken, validTeam } from '../middlewares/validLogin';
// import { validTeam } from '../middlewares/valid.teams';

const matchesRouter = Router();

matchesRouter.get('/', matchesController.matchesInProgress);
matchesRouter.patch('/:id/finish', validToken, matchesController.matchesFinish);
matchesRouter.patch('/:id', validToken, matchesController.matchesProgress);
matchesRouter.post('/', validToken, validTeam, matchesController.postMatchesInProgress);

export default matchesRouter;
