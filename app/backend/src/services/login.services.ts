// import * as bcrypt from 'bcryptjs';
import Users from '../database/models/Users';

const addLogin = async (email: string) => {
  const newLogin = await Users.findOne({ where: { email } });
  //   console.log(newLogin, 'service');
  return newLogin;
};

export const verifyUSer = async (id:number) => {
  const user = await Users.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  //   console.log(newLogin, 'service');
  return user;
};

const loginService = { addLogin };

export default loginService;
