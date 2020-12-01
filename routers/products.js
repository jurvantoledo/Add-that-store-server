const { Router } = require("express")
const Store = require("../models").store
const Product = require("../models").product

const router = new Router()

router.get("/", async(req, res, next) => {
    try {
        const limit = req.query.limit || 10;
        const offset = req.query.offset || 0
        const products = await Product.findAndCountAll({
            limit,
            offset,
            include: [Store],
            order: [[Store, "createdAt", "DESC"]]
        })
        res.status(200).send({message: "ok", products})
        
    } catch (error) {
        next(error)
    }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
  
    console.log(id);
    if (isNaN(parseInt(id))) {
      return res.status(400).send({ message: "product id is not a number" });
    }
  
    const product = await Product.findByPk(id, {
      include: [Store],
      order: [[Store, "createdAt", "DESC"]]
    });
  
    if (product === null) {
      return res.status(404).send({ message: "Product not found" });
    }
  
    res.status(200).send({ message: "ok", product });
  });

  router.delete("/:id", async (req, res, next) => {
    try {
      const storeId = req.params.id
      const toDelete = await Product.findByPk(storeId)
  
      if(!toDelete) {
        res.status(404).send("reservation not found")
      }
  
      const deleted = await toDelete.destroy()
      res.json(deleted)
    } catch (e) {
      next(e)
    }
  });

module.exports = router;
