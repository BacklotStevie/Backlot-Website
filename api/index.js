const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

import reviews from "./seeds/reviews"
//Nodemon file

app.get("/reviews", (req, res) => {
    res.json(reviews)
})

app.listen(3000, () => {
    console.log("running")
})