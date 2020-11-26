const { Router } = require("express")
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

  router.post("/:id", async (req, res, next) => {
    try {
    const store = await User.findByPk(req.params.id);
    console.log(store);
  
    const { name, address, description, image, category } = req.body;
    if (!name || !address || !description || !image || !category) {
      return res.status(400).send(
        "Please provide an name, address, description, image, and select the right category."
        );
    }
  
      const newStore = await Store.create({
        name,
        address,
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
