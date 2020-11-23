'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stores",
      [
        {
          name: "Awesome Store",
          image: "An image",
          description: "Beatiful store",
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Less Awesome Store",
          image: "An image",
          description: "Less Beatiful store",
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stores", null, {});
  },
};