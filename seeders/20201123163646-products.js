'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Awesome product",
          image: "https://www.dermstore.com/blog/wp-content/uploads/2018/01/080819-Body-Prods.jpg",
          description: "An awesome description",
          createdAt: new Date(),
          updatedAt: new Date(),
          storeId: 1,
        },
        {
          name: "Less Awesome product",
          image: "https://www.dermstore.com/blog/wp-content/uploads/2018/01/080819-Body-Prods.jpg",
          description: "An less awesome description",
          createdAt: new Date(),
          updatedAt: new Date(),
          storeId: 1,
        },
        {
          name: "Not at all an Awesome product",
          image: "https://www.dermstore.com/blog/wp-content/uploads/2018/01/080819-Body-Prods.jpg",
          description: "Not at all an awesome description",
          createdAt: new Date(),
          updatedAt: new Date(),
          storeId: 2,
        },
        {
          name: "decent",
          image: "https://www.dermstore.com/blog/wp-content/uploads/2018/01/080819-Body-Prods.jpg",
          description: "decent description",
          createdAt: new Date(),
          updatedAt: new Date(),
          storeId: 2,
        },
        {
          name: "boring",
          image: "https://www.dermstore.com/blog/wp-content/uploads/2018/01/080819-Body-Prods.jpg",
          description: "boring description",
          createdAt: new Date(),
          updatedAt: new Date(),
          storeId: 3,
        },
        {
          name: "so many products",
          image: "https://www.dermstore.com/blog/wp-content/uploads/2018/01/080819-Body-Prods.jpg",
          description: "so many product descriptions",
          createdAt: new Date(),
          updatedAt: new Date(),
          storeId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
