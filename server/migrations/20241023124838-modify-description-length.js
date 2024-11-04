'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Change the description column from STRING to TEXT
    await queryInterface.changeColumn('Products', 'description', {
      type: Sequelize.TEXT,  // Change to TEXT for longer descriptions
      allowNull: true,       // Adjust based on your requirements (true or false)
    });
  },

  async down (queryInterface, Sequelize) {
    // Revert the description column back to STRING
    await queryInterface.changeColumn('Products', 'description', {
      type: Sequelize.STRING, // Change back to STRING
      allowNull: true,       // Adjust based on your requirements
    });
  }
};
