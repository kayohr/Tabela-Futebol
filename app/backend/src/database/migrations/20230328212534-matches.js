'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        
      },
      homeTeamId: {
        allowNull: false,
        type: Sequelize.INTEGER ,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'home_team_id',
        references: {
          // Informa a tabela da referência da associação
          model: 'teams',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
        }
      },
      homeTeamGoals: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'home_team_goals'
        

      },
      awayTeamId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'away_team_id',
        references: {
          // Informa a tabela da referência da associação
          model: 'teams',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
        }

      },
      awayTeamGoals: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'away_team_goals'

      },
      inProgress: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: 'in_progress',

      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('matches');
  },
};

