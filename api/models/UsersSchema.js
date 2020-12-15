const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    email: String,
    password: String,
    role: {type: String, default: "regular"}
})

module.exports = mongoose.model("Users", usersSchema, "users");