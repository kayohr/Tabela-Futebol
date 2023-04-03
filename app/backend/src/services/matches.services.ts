import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';

const getVerifyMatches = async () => {
  const matches = await Matches.findAll({
    include: [
      { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
      { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
    ],
  });
  console.log(matches, 'service');

  return matches;
};

const matchesServices = { getVerifyMatches };
export default matchesServices;
