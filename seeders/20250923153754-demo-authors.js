'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Authors', [
      {
        name: 'Jane Doe',
        email: 'jane@example.com',
        bio: 'Experienced yoga instructor and author of several articles.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John Smith',
        email: 'john@example.com',
        bio: 'Specializes in Vinyasa and mindfulness practices.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authors', null, {});
  }
};
