import { Request, Response } from 'express';
import lederboardHome from '../services/leaderboard.home.services';

const getLederboardHome = async (_req: Request, res: Response) => {
  const Lederboard = await lederboardHome.getAllLeaderboardHome();

  return res.status(200).json(Lederboard);
};

export default {
  getLederboardHome,
};
