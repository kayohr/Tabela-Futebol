'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,

      }
  
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};

