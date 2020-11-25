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

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "store id is not a number" });
  }

  const store = await Store.findByPk(id, {
    include: [User],
    order: [[User, "createdAt", "DESC"]]
  });

  if (store === null) {
    return res.status(404).send({ message: "Store not found" });
  }

  res.status(200).send({ message: "ok", store });
});

module.exports = router;

//userId: store.id,

