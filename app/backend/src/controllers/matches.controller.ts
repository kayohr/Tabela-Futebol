import { Request, Response } from 'express';
import matchesServices from '../services/matches.services';

// const matches = async (req: Request, res: Response) => {
//   try {
//     const teams = await matchesServices.getVerifyMatches();

//     return res.status(200).json(teams);
//   } catch (e) {
//     console.log(e);
//   }
// };

const matchesInProgress = async (req: Request, res: Response) => {
  try {
    const { inProgress } = req.query;
    console.log(inProgress);

    const matchesTeamsInProgress = await matchesServices.getVerifyMatchesInProgress(inProgress);
    if (inProgress) {
      return res.status(200).json(matchesTeamsInProgress);
    }
    const teams = await matchesServices.getVerifyMatches();
    return res.status(200).json(teams);
  } catch (e) {
    console.log(e);
  }
};

const matchesController = { matchesInProgress };
export default matchesController;
