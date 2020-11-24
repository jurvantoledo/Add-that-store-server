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
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          storeId: 1,
        },
        {
          name: "Less Awesome Store",
          image: "An image",
          description: "Less Beautiful store",
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          storeId: 2,
        },
        {
          name: "Totally not an Awesome Store",
          image: "An image",
          description: "Totally not an Beautiful store",
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          storeId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stores", null, {});
  },
};