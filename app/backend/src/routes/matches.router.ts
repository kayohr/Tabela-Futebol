import { Router } from 'express';
import matchesController from '../controllers/matches.controller';

const matchesRouter = Router();

matchesRouter.get('/', matchesController.matches);
// matchesRouter.get('/', matchesController);

export default matchesRouter;
