const express = require("express")

const app = express()

app.get("/hello", (_, res) => {
    console.log("Executing hello route")
    res.send("Hello world, updated! 2")
})

const PORT = process.env.PORT || 1880

app.listen(PORT, () => {
    console.log("App running on port", PORT)
})