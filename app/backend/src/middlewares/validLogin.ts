import { NextFunction, Request, Response } from 'express';

import * as jwt from 'jsonwebtoken';
import Matches from '../database/models/Matches';

// import jwtToken from '../interfaces/validTokenLogin';
// import createToken from '../auth/authToken';

const validLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  next();
};

// const validUsername = (req: Request, res: Response, next: NextFunction) => {
//   const { username } = req.body;
//   if (!username) {
//     return res.status(400).json({ message: '"username" is required' });
//   }

//   next();
// };
const validEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  //   console.log(email);
  const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
  if (!emailRegex.test(email)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  next();
};
const validPassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  next();
};

const validToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const portToken = process.env.JWT_SECRET || 'secret';

  try {
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const payload = jwt.verify(authorization, portToken);
    console.log(payload);
    req.body.user = payload;

    return next();
  } catch (err: any) {
    err.statusCode = 401;
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  next();
};

const validTeam = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamId, awayTeamId } = req.body;
  console.log(homeTeamId);

  const teamHome = await Matches.findOne({ where: { id: homeTeamId } });
  console.log(teamHome);

  const teamAway = await Matches.findOne({ where: { id: awayTeamId } });

  if (homeTeamId === awayTeamId) {
    return res.status(422).json(
      { message: 'It is not possible to create a match with two equal teams' },
    );
  } if (!teamHome || !teamAway) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }
  // } if (!homeTeamId && !awayTeamId) {
  //   return res.status(400).json({ message: 'team does not exist!' });
  // }

  next();
};

// const loginValid = (req: Request, res: Response, next: NextFunction) => [
//   validEmail(req, res, next),
//   validPassword(req, res, next),
//   validLogin(req, res, next),
// ];
export { validEmail, validPassword, validLogin, validToken, validTeam };

// const validLogin = (req, res, next) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         return res.status(400).json({
//             message: 'Some required fields are missing',
//           });
//     }

//     next();
// };
