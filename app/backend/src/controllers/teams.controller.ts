import { Request, Response } from 'express';
// import Teams from '../database/models/Teams';
import teamServices from '../services/team.services';

const team = async (_req: Request, res: Response) => {
  try {
    const teams = await teamServices.getAll();

    return res.status(200).json(teams);
  } catch (e) {
    console.log(e);
  }
};
const teamGetById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const byId = await teamServices.getById(Number(id));
    if (!byId) {
      return res.status(404).json({
        message: 'not found',
      });
    }
    return res.status(200).json(byId);
  } catch (e) {
    console.log(e);
    // res.status(500).json({ message: error500Message });
  }
};
const teamController = { team, teamGetById };
export default teamController;
