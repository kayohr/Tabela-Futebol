import { Router } from 'express';
import lederboardHome from '../controllers/leaderboard.home.controller';

const leaderboardRouter = Router();

leaderboardRouter.get('/home', lederboardHome.getLederboardHome);

export default leaderboardRouter;
