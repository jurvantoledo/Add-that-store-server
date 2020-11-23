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
        },
        {
          name: "Less Awesome product",
          image: "An image",
          description: "An less awesome description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
