import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditReview(props) {
    const [article, setArticle] = useState({
        title: "",
        writer: "",
        img: "",
    })

    const [reviews, setReviews] = useState({
        heading: "",
        info: "",
    })

    function handleArticleChange(event) {
        setArticle({
            ...article,
            [event.target.name]: event.target.value
        })
    }

    function handleReviewChange(event) {
        setReviews({
            ...reviews,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/reviews/${props.match.params.id}`)
            .then((response) => {
                setReviews(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    function editReviewHandler(event) {
        debugger
        let combined = {
            ...article,
            reviews: reviews
        }


        event.preventDefault();
        axios.put(`hhtp://localhost:3000/reviews/${props.match.params.id}`, combined)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <form onSubmit={editReviewHandler}>
            <input type="text" name="title" value={article.title} placeholder="title" onChange={handleArticleChange}></input>
            <input type="text" name="writer" value={article.writer} placeholder="writer" onChange={handleArticleChange}></input>
            <input type="text" name="heading" value={reviews.heading} placeholder="headings" onChange={handleReviewChange}></input>
            <input type="text" name="info" value={reviews.info} placeholder="body text" onChange={handleReviewChange}></input>
            <input type="text" name="img" value={article.img} placeholder="images" onChange={handleArticleChange}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default EditReview;