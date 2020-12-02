const { Router } = require("express")
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user
const Store = require("../models").store

const router = new Router()

router.get("/", async (req, res, next) => {
    try {
        const users = await User.findAndCountAll({
            include: [Store],
            order: [[Store, "createdAt", "DESC"]]
        })
        res.status(200).send({message: "ok", users})
    } catch (error) {
        next(error)
    }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "user id is not a number" });
  }

  const user = await User.findByPk(id, {
    include: [Store],
    order: [[Store, "createdAt", "DESC"]]
  });

  if (user === null) {
    return res.status(404).send({ message: "User not found" });
  }

  res.status(200).send({ message: "ok", user });
});

router.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { email, name, phone, isOwner } = req.body;

  if (!id) {
    return res.status(401).json({ message: "User not found." });
  }

  try {
    const userToUpdate = await User.findByPk(id);

    if (!userToUpdate) {
      return res.status(404).json({ message: "No user to update found." });
    }

    const updatedUser = await userToUpdate.update({
      name,
      email,
      phone,
      isOwner,
    });

    delete updatedUser.dataValues["password"]; // don't send back the password hash

    res.json(updatedUser);
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.patch("/:id/password", async (req, res, next) => {
  const { id } = req.params;
  const { password } = req.body;

  if (!id) {
    return res.status(401).json({ message: "User not found." });
  }

  try {
    const userToUpdate = await User.findByPk(id);

    if (!userToUpdate) {
      return res.status(404).json({ message: "No user to update found." });
    }

    const updatedUser = await userToUpdate.update({
      password: bcrypt.hashSync(password, SALT_ROUNDS),
    });

    delete updatedUser.dataValues["password"]; // don't send back the password hash

    res.status(200).send({ message: "Password updated." });
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

  router.post("/:id", async (req, res, next) => {
    try {
    const store = await User.findByPk(req.params.id);
    console.log(store);
  
    const { name, country, city, address, postCode, description, image, category } = req.body;
    if 
    (!name || !country || !city || !address || !postCode || !description || !image || !category) 
    {
      return res.status(400).send(
        "Please make sure everything is filled in rightfully."
        );
    }
  
      const newStore = await Store.create({
        name,
        country,
        city,
        address,
        postCode,
        description,
        image,
        category,
        userId: store.id,
      });
      
      res.status(201).send({ message: "Store created", ...newStore.dataValues });
    } catch (error) {
        next(error)
      }
  });

module.exports = router;
