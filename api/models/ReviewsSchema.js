const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    title: String,
    writer: String,
    reviews: [
        {
            heading: String,
            info: String,
        }
    ],
    images: String,
})

module.exports = mongoose.model("Review", reviewsSchema, "reviews")