import { Router } from 'express';
import teamController from '../controllers/teams.controller';

const teamRouter = Router();

teamRouter.get('/', teamController.team);
teamRouter.get('/:id', teamController.teamGetById);

export default teamRouter;
