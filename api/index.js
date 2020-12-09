const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require("mongoose");
const Review =  require("./models/ReviewsSchema")
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

app.get("/reviews", (req, res) => {
    Review.find()
    .then((review)=>{
        res.json(review)
    })
    
})

app.listen(3000, () => {
    console.log("running")
})