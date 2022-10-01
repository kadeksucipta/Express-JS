const router = require("express").Router()

router.get("/", (req, res) => {
    res.send({
        status: "Successffuly",
        message: "Hello IM Home"
    })
})

router.get("/About", (req, res) => {
    res.send({
        status: "Successffuly",
        message: "Hello IM About page"
    })
})

router.get("/Contact", (req, res) => {
    res.send({
        status: "Successffuly",
        message: "Hello IM Contact page"
    })
})

router.get("/Service", (req, res) => {
    res.send({
        status: "Successffuly",
        message: "Hello IM Servive page"
    })
})

router.get("/:category/:tag", (req, res) => {
    const {category, tag} = req.params
    res.json({ 
        category:category,
        tag: tag 
    })
})

module.exports = router