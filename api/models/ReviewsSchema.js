const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    title: String,
    writer: String,
    reviews: [
        {
            title: String,
            info: String,
        }
    ],
    images: String,
})