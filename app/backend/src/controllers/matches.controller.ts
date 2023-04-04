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

const matchesProgress = async (req: Request, res: Response) => {
  try {
    const { homeTeamGoals, awayTeamGoals } = req.body;

    const { id } = req.params;
    const matchesIsProgress = await matchesServices.getVerifyMatchesGoals(
      +id,
      +homeTeamGoals,
      +awayTeamGoals,
    );

    return res.status(200).json(matchesIsProgress);
  } catch (e) {
    console.log(e);
  }
};

const postMatchesInProgress = async (req: Request, res: Response) => {
  try {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;

    const matchesIsProgress = await matchesServices.postVerifyMacthes({ homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals });

    return res.status(201).json(matchesIsProgress);
  } catch (e) {
    console.log(e);
  }
};

const matchesController = { matchesInProgress,
  matchesFinish,
  matchesProgress,
  postMatchesInProgress };
export default matchesController;
