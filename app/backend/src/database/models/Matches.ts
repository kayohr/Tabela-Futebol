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
  },
  homeTeamsGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamId: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
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

Teams.hasMany(Matches);

Matches.belongsTo(Teams, { foreignKey: 'home_team_id', as: 'homeTeamId' });
Matches.belongsTo(Teams, { foreignKey: 'away_team_id', as: 'awayTeamId' });
