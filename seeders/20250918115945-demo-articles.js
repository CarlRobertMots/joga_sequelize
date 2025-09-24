'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Articles', [
      {
        name: 'Introduction to Ashtanga',
        slug: 'introduction-to-ashtanga',
        image: 'ashtanga.jpg',
        body: 'Ashtanga yoga is a dynamic and physically demanding practice that synchronizes breath with movement through a series of postures.',
        published: new Date(),
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Morning Vinyasa Flow Routine',
        slug: 'morning-vinyasa-flow-routine',
        image: 'morning.jpg',
        body: 'Start your day with this energizing Vinyasa flow sequence designed to awaken the body and mind.',
        published: new Date(),
        author_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Secrets of a yoga teacher',
        slug: 'secrets-of-a-yoga-teacher',
        image: 'yoga-teacher.jpg',
        body: 'Discover the insights and experiences of seasoned yoga instructors as they share their journey and tips for aspiring teachers.',
        published: new Date(),
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  }
};