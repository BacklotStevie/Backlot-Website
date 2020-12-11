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

app.get("/reviews/:id", (req, res) => {
    Review.findById(req.params.id)
        .then((review) => {
            res.json(review);
        })
        .catch((err) => {
            res.status(500).json({ message: "Oops" });
        });
});

app.put("/reviews/:id", (req, res) => {
    console.log(req.body)
    Review.findByIdAndUpdate(req.params.id, req.body)
        .then((oldReview) => {
            res.send("okay")
        })
        .catch((err) => {
            res.status(500).send("Oops");
        });
});

app.delete("/reviews/:id", (req, res) => {
    Review.findByIdAndDelete(req.params.id, req.body)
        .then((deleteReview) => {
            res.send("Deleted")
        })
        .catch((err) => {
            res.status(500).send("Oops");
        });
});

module.exports = app