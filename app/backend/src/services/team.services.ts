import Teams from '../database/models/Teams';

const getAll = async () => {
  const team = await Teams.findAll();

  return team;
};

const getById = async (id: number) => {
  const teams = await Teams.findByPk(id);
  // const users = await User.findOne();

  return teams;
};

const teamServices = { getAll, getById };
export default teamServices;
