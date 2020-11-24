"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "testuser",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          phone: 12345679,
          isOwner: true,
          storeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "owner",
          email: "ow@ner.com",
          password: bcrypt.hashSync("owner", SALT_ROUNDS),
          phone: 12345689,
          isOwner: true,
          storeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          phone: 12345687,
          isOwner: false,
          storeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
