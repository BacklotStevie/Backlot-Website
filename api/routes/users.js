const express = require("express")
const app = express();
const User = require("../models/UsersSchema");

app.post("/signup", (req, res) => {
    User.create({
        email: req.body.email,
        password: req.body.password
    })
        .then((user) => {
            res.status(200).send("User Created!")
        })
        .catch((err) => {
            res.status(500).send("error")
        })
})

module.exports = app;