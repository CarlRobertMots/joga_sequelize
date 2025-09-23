'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // queryInterface.changeColumn('Articles', 'id', {
    //type: Sequelize.INTEGER,
    //autoIncrement: true,
      //primaryKey: true,
      //allowNull: false
    //});
    queryInterface.changeColumn('Articles', 'name', {
      type: Sequelize.STRING,
      allowNull: false
    });
    queryInterface.changeColumn('Articles', 'slug', {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true
    });
    queryInterface.changeColumn('Articles', 'body', {
      type: Sequelize.TEXT,
      allowNull: false
    });
    queryInterface.changeColumn('Articles', 'image', {
      type: Sequelize.STRING,
      allowNull: true
    });
    queryInterface.changeColumn('Articles', 'published', {
      type: Sequelize.DATE,
      allowNull: false
    });
    queryInterface.changeColumn('Articles', 'author_id', {
      type: Sequelize.INTEGER,
    
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('Articles');
  }
};
