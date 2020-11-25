const { Router } = require("express")
const User = require("../models").user
const Store = require("../models").store
const Product = require("../models").product

const router = new Router()

router.get("/", async (req, res, next) => {
    try {
        const stores = await Store.findAndCountAll({
            include: [User],
            order: [[User, "createdAt", "DESC"]]
        })
        res.status(200).send({message: "ok", stores})
    } catch (error) {
        next(error)
    }
})

router.post("/:id/add-store", async (req, res, next) => {
    try {
    const store = await Store.findByPk(req.params.id);
    console.log(store);

    const { name, address, description, image } = req.body;
    if (!name || !address || !description || !image) {
      return res.status(400).send(
        "Please provide an name, address, description, and a image."
        );
    }
  
      const newStore = await Store.create({
        name,
        address,
        description,
        image,
        userId: store.id,
      });
      
      res.status(201).send({ message: "Store created", newStore });
    } catch (error) {
        next(error)
      }
  });

module.exports = router;
