import model from '../database/models';
import leaderBoardHome from '../query/query';
// import leaderBoardAll from '../query/queryAll';
import leaderBoardAway from '../query/queryAway';
import ILeaderboard from './interface.leaderboard';

const getAllLeaderboardHome = async (): Promise<ILeaderboard[]> => {
  // const test = model;
  const [result] = await model.query(leaderBoardHome);

  return result as ILeaderboard[];
};

const getAllLeaderboardAway = async (): Promise<ILeaderboard[]> => {
  // const test = model;
  const [result] = await model.query(leaderBoardAway);

  return result as ILeaderboard[];
};

// const getAllLeaderboardAll = async (): Promise<ILeaderboard[]> => {
//   // const test = model;
//   const [result] = await model.query(leaderBoardAll);

//   return result as ILeaderboard[];
// };

const leaderboardService = { getAllLeaderboardHome, getAllLeaderboardAway };

export default leaderboardService;
