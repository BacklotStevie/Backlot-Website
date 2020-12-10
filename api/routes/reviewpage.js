const express = require('express');
const Review = require('../models/ReviewsSchema');
const app = express();

app.get("/reviews", (req, res) => {

    Review.find()
        .then((reviews) => {
            res.json(reviews)
        })
        .catch((err) => {
            res.status(500), json({ message: "Oops" })
        })
});

app.get("/review/:id", (req, res) => {
    Review.findById(req.params.id)
        .then((review) => {
            res.json(review);
        })
        .catch((err) => {
            res.status(500).json({ message: "Oops" });
        });
});

module.exports = app