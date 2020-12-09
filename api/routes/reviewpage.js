const express = require('express');
const ReviewsSchema = require('../models/ReviewsSchema');
const app = express();

app.get("./reviews", (req, res) => {

    Review.find()
        .then((reviews) => {
            res.json(reviews)
        })
        .catch((err) => {
            res.status(500), json({ message: "Oops" })
        })
})

module.exports = app