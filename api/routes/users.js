const express = require("express")
const app = express();
const User = require("../models/UsersSchema");
var jwt = require("jsonwebtoken");


app.get("/users", (req, res) => {

    User.find()
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.status(500), json({ message: "Oops" })
        })
});

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

app.post("/login", (req, res) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) res.status(403).send("Invalid credentials");
            else if (user.password === req.body.password) {
                var token = jwt.sign({ id: user._id }, 'shhhh')
                res.json({ token: token })
            }
            else {
                res.status(403).send("Invalid credentials");
            }
        })
})

module.exports = app;