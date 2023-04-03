import { BOOLEAN, INTEGER, Model } from 'sequelize';
import db from '.';
import Teams from './Teams';

export default class Matches extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamsGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    type: INTEGER,
    allowNull: false,
    field: 'home_team_id',

  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
    field: 'home_team_goals',

  },
  awayTeamId: {
    type: INTEGER,
    allowNull: false,
    field: 'away_team_id',

  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
    field: 'away_team_goals',

  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,

  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,

});

// Teams.hasMany(Matches);

Matches.belongsTo(Teams, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeamId', as: 'awayTeam' });
