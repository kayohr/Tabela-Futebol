// import * as bcrypt from 'bcryptjs';
import Users from '../database/models/Users';

const addLogin = async (email: string) => {
  const newLogin = await Users.findOne({ where: { email } });
  //   console.log(newLogin, 'service');

  // const verifyPassword = bcrypt.compareSync(password, newLogin);
  // if (!verifyPassword) {
  //   return;
  // }
  return newLogin;
};

const loginService = { addLogin };

export default loginService;
