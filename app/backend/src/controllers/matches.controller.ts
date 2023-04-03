import { Request, Response } from 'express';
import matchesServices from '../services/matches.services';

const matchesInProgress = async (req: Request, res: Response) => {
  try {
    const { inProgress } = req.query;

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

const matchesFinish = async (req: Request, res: Response) => {
  try {
    // const { inProgress } = req.query;

    const { id } = req.params;
    await matchesServices.getVerifyMatchesFinish(+id);

    return res.status(200).json(
      { message: 'Finished' },
    );
  } catch (e) {
    console.log(e);
  }
};
const matchesController = { matchesInProgress, matchesFinish };
export default matchesController;
