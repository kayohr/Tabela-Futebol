import { Request, Response } from 'express';
import matchesServices from '../services/matches.services';

const matches = async (req: Request, res: Response) => {
  try {
    const teams = await matchesServices.getVerifyMatches();
    console.log(teams, 'controller');

    return res.status(200).json(teams);
  } catch (e) {
    console.log(e);
  }
};

const matchesController = { matches };
export default matchesController;
