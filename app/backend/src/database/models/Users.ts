import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

export default class Users extends Model {
  declare id: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

Users.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING(100),
    allowNull: false,
  },
  role: {
    type: STRING(100),
    allowNull: false,
  },
  email: {
    type: STRING(100),
    allowNull: false,
  },
  password: {
    type: STRING(100),
    allowNull: false,
  },

}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});
