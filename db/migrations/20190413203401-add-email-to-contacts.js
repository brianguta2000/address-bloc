'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Contacts','email', {
      allowNull: true,
      type: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
  return quequeryInterface.removeColumn('Contacts', 'email');
  }
};
