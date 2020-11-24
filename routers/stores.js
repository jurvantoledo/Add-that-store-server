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

module.exports = router;
