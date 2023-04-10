import model from '../database/models';
import leaderBoardHome from '../query/query';
import ILeaderboard from './interface.leaderboard';

const getAllLeaderboardHome = async (): Promise<ILeaderboard[]> => {
  // const test = model;
  const [result] = await model.query(leaderBoardHome);

  return result as ILeaderboard[];
};

const leaderboardService = { getAllLeaderboardHome };

export default leaderboardService;
