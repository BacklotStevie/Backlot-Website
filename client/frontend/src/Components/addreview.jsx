import React, { useState } from 'react'

function AddReview() {
    const [article, setArticle] = useState({
        title: "",
        writer: "",
        img: ""
    })

    const [reviews, setReviews] = useState({
        heading: "",
        info: "",
    })

    function handleArticleChange(event) {
        setArticle({
            [event.target.name]: event.target.value
        })
    }

    function handleReviewChange(event) {
        setReviews({
            [event.target.name]: event.target.value
        })
    }


    return (
        <div>
            <input type="text" name="title" value={article.title} placeholder="title" onChange={handleArticleChange}></input>
            <input type="text" name="writer" value={article.writer} placeholder="writer" onChange={handleArticleChange}></input>
            <input type="text" name="heading" value={reviews.heading} placeholder="headings" onChange={handleReviewChange}></input>
            <input type="text" name="info" value={reviews.info} placeholder="body text" onChange={handleReviewChange}></input>
            <input type="text" name="img" value={article.img} placeholder="images" onChange={handleArticleChange}></input>
            <button>Submit</button>
        </div>
    )
}

export default AddReview;