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
          country: "Netherlands",
          city: "Amsterdam",
          address: "Prins Hendrikkade 511 A",
          postCode: "1011TE",
          category: "Automotive",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Less Awesome Store",
          image: "An image",
          description: "Less Beautiful store",
          country: "Macedonia",
          city: "Skopje",
          address: "Prins Hendrikkade 511 A",
          postCode: "1011TE",
          category: "Clothing",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          name: "Totally not an Awesome Store",
          image: "An image",
          description: "Totally not an Beautiful store",
          country: "Albania",
          city: "Tirana",
          address: "Rruga Bedri Karapici 29",
          postCode: "8RG8+WH",
          category: "Electronics",
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