const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const Review = require("./models/ReviewsSchema")
const bodyParser = require("body-parser");
app.use(cors())


//Nodemon file
mongoose
    .connect("mongodb://localhost/final-project", { useNewUrlParser: true })
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );

    })
    .catch((err) => {
        console.error("Error connecting to mongo", err);
    });






app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/auth", require("./routes/users"))
app.use("/", require("./routes/reviewpage"))

app.post("/writeReview", (req, res) => {
    console.log(req.body);
    Review.create(req.body)
        .then((insertedReview) => {
            res.send("review inserted")
        })
        .catch((err) => {
            res.status(500).send("Oops!")
        })
});

app.listen(3000, () => {
    console.log("running")
})