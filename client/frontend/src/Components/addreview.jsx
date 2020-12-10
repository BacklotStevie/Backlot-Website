import React, { useState } from 'react'

function AddReview() {
    const [article, setArticle] = useState({
        title: "",
        writer: "",
        reviews: {
            title: "",
            info: "",
        },
        images: ""
    })
    return (
        <div>
            <input type="text" name="title" value={article.title} placeholder="title"></input>
            <input type="text" name="writer" value={article.writer} placeholder="writer"></input>
            <input type="text" name="reviews.title" value={article.reviews.title} placeholder="reviews.title"></input>
            <input type="text" name="reviews.info" value={article.reviews.info} placeholder="reviews.info"></input>
            <input type="text" name="images" value={article.images} placeholder="images"></input>
            <button>Submit</button>
        </div>
    )
}