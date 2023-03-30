import { Request, Response } from 'express';
import createToken from '../auth/authToken';
// import Users from '../database/models/Users';
// import createToken from '../auth/authToken';
import loginService from '../services/login.services';

const login = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const userLogin = await loginService.addLogin(email);
    // console.log(userLogin, 'controller');
    if (!userLogin) {
      return res.status(401).json({
        message: 'Invalid fields',
      });
    }
    const token = createToken(userLogin);

    return res.status(200).json({ token });
    // return res.status(200).json(userLogin);
  } catch (e) {
    console.log(e);
  }
};

export default {
  login,
};
