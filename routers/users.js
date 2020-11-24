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

module.exports = router;
