const express = require("express")
const app = express()
const router = require("./routes")

app.use(router)
app.use((req, res, next) => {
    res.send({
        status: "Sorry this page failed",
        message: "Resource" + req.originalUrl + "Not Found"
    })
})
app.listen(process.env.PORT || 3000, () => console.log("Server: http://localhost:3000"))