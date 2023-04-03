import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';

const getVerifyMatches = async () => {
  const matches = await Matches.findAll({
    include: [
      { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
      { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
    ],
  });

  return matches;
};

const getVerifyMatchesInProgress = async (inProgress: any) => {
  const progress = inProgress === 'true';
  const matchesInProgress = await Matches.findAll({
    include: [
      { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
      { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
    ],
    where: { inProgress: progress } });

  return matchesInProgress;
};

const getVerifyMatchesFinish = async (id:number) => {
  // const progress = inProgress === 'false';

  await Matches.update({ inProgress: false }, {
    where: {
      id,
    },
  });
};

const getVerifyMatchesGoals = async (id:number, homeTeamGoals:number, awayTeamGoals:number) => {
  const test = await Matches.update({ homeTeamGoals, awayTeamGoals, inProgress: true }, {
    where: {
      id,
    },
  });

  // console.log(test);

  return test;
};

const matchesServices = { getVerifyMatches,
  getVerifyMatchesInProgress,
  getVerifyMatchesFinish,
  getVerifyMatchesGoals };
export default matchesServices;
