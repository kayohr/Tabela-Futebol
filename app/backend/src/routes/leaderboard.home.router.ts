import { Router } from 'express';
import lederboardHome from '../controllers/leaderboard.home.controller';

const leaderboardRouter = Router();

leaderboardRouter.get('/home', lederboardHome.getLederboardHome);
leaderboardRouter.get('/away', lederboardHome.getLederboardAway);
// leaderboardRouter.get('/', lederboardHome.getLederboardAll);

export default leaderboardRouter;
