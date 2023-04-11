import { Request, Response } from 'express';
import lederboardHome from '../services/leaderboard.home.services';

const getLederboardHome = async (_req: Request, res: Response) => {
  try {
    const Lederboard = await lederboardHome.getAllLeaderboardHome();

    return res.status(200).json(Lederboard);
  } catch (e) {
    console.log(e);
  }
};

export default {
  getLederboardHome,
};
