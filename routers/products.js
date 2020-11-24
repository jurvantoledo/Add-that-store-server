const { Router } = require("express")
const Store = require("../models").store
const Product = require("../models").product

const router = new Router()

router.get("/", async(req, res, next) => {
    try {
        const products = await Product.findAndCountAll({
            include: [Store],
            order: [[Store, "createdAt", "DESC"]]
        })
        res.status(200).send({message: "ok", products})
        
    } catch (error) {
        next(error)
    }
})

module.exports = router;
