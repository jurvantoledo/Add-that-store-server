'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Awesome product",
          image: "An image",
          description: "An awesome description",
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 1,
        },
        {
          name: "Less Awesome product",
          image: "An image",
          description: "An less awesome description",
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 1,
        },
        {
          name: "Not at all an Awesome product",
          image: "An image",
          description: "Not at all an awesome description",
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 2,
        },
        {
          name: "decent",
          image: "An image",
          description: "decent description",
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 2,
        },
        {
          name: "boring",
          image: "An image",
          description: "boring description",
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 3,
        },
        {
          name: "so many products",
          image: "An image",
          description: "so many product descriptions",
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
