import { Router } from 'express';
import teamController from '../controllers/teams.controller';

const router = Router();

router.get('/', teamController.team);
router.get('/:id', teamController.teamGetById);

export default router;
