'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    const columns = {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      factor: {
        type: Sequelize.CHAR
      }
    };

    return queryInterface.createTable('products', columns, require('./config/defaultTableConfig'));
  },

  down: (queryInterface) => queryInterface.dropTable('products')
};
