import { Router } from 'express';
import matchesController from '../controllers/matches.controller';

const matchesRouter = Router();

// matchesRouter.get('/', matchesController.matches);
matchesRouter.get('/', matchesController.matchesInProgress);

export default matchesRouter;
