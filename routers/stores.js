const { Router } = require("express")
const User = require("../models").user
const Store = require("../models").store
const Product = require("../models").product

const router = new Router()

router.get("/", async (req, res, next) => {
    try {
        const limit = req.query.limit || 10;
        const offset = req.query.offset || 0
        const stores = await Store.findAndCountAll({
            limit,
            offset,
            include: [Product],
            order: [[Product, "createdAt", "DESC"]]
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
    include: [Product],
    order: [[Product, "createdAt", "DESC"]]
  });

  if (store === null) {
    return res.status(404).send({ message: "Store not found" });
  }

  res.status(200).send({ message: "ok", store });
});

router.post("/:id", async (req, res, next) => {
  try {
  const store = await Store.findByPk(req.params.id);
  console.log(store);

  const { name, description, image } = req.body;
  if 
  (!name || !description || !image) 
  {
    return res.status(400).send(
      "Please make sure everything is filled in rightfully."
      );
  }

    const newProduct = await Product.create({
      name,
      description,
      image,
      storeId: store.id,
    });
    
    res.status(201).send({ message: "Product created", ...newProduct.dataValues });
  } catch (error) {
      next(error)
    }
});

module.exports = router;
