import * as bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import createToken from '../auth/authToken';
import Users from '../database/models/Users';
import loginService, { verifyUSer } from '../services/login.services';

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const userLogin = await loginService.addLogin(email);
    if (!userLogin) {
      return res.status(401).json({
        message: 'Invalid email or password',
      });
    }
    const verifyPassword = bcrypt.compareSync(password, userLogin?.password);
    if (!verifyPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = createToken(userLogin as Users);
    return res.status(200).json({ token });
  } catch (e) {
    console.log(e);
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.body.user.payload;
    const userLogin = await verifyUSer(id);

    if (!userLogin) {
      return res.status(401).json(
        { message: 'Token must be a valid token!' },
      );
    }

    return res.status(200).json({ role: userLogin.role });
  } catch (e) {
    console.log(e);
  }
};

export default {
  login, loginUser,
};
