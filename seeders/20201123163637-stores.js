'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stores",
      [
        {
          name: "Awesome Store",
          image: "An image",
          description: "Beautiful store",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Less Awesome Store",
          image: "An image",
          description: "Less Beautiful store",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          name: "Totally not an Awesome Store",
          image: "An image",
          description: "Totally not an Beautiful store",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stores", null, {});
  },
};