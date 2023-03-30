import Users from '../database/models/Users';

const addLogin = async (email: string) => {
  const newLogin = await Users.findOne({ where: { email } });
  //   console.log(newLogin, 'service');

  return newLogin;
};

const loginService = { addLogin };

export default loginService;
