const express = require("./../node_modules/express") // accessing the express from 01_express node modules
const fs = require("fs")

const app = express(); // creating a instance
const PORT = 8000

app.use((req, res, next) => {
    console.log("MW1")
    next()
})

app.use((req, res, next) => {
    console.log("MW2")
    next()
})

app.use((req, res, next) => {
    console.log("MW3")
    next()
})

app.use((req, res, next) => {
    console.log("MW4")
    next()
})

app.use((req, res, next) => {
    console.log("MW5")
    next()
})

app.use((req, res, next) => {
    fs.appendFile("log.txt", `${Date.now()}, ${req.ip} ${req.method}, ${req.path}\n`, (err, data) => {
        next()
    })
})

app.get("/user", (req, res) => {
    res.send("Manoj Kumar Patel")
})

app.listen(PORT, () => {
    console.log("Server started at port:" + PORT)
})



// so learn about writing middle ware why to use them how to use them and when to use them