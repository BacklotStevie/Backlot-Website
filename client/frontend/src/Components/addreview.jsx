import React, { useState } from 'react';
import axios from 'axios';

function AddReview() {
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


    function addReviewHandler(event) {
        debugger
        let combined = {
            ...article,
            reviews: reviews
        }

        event.preventDefault();
        var config = {
            method: 'post',
            url: 'http://localhost:3000/writeReview',
            headers: { 
            'Authorization': `Bearer ${localStorage.getItem("token")}`, 
            'Content-Type': 'application/json'
            },
            data :  { combined }
        };
        axios(config)
            .then((response) => {
            debugger;
            })
            .catch((error) => {
            debugger;
            });
          


        // axios.post("http://localhost:3000/writeReview", combined)
        //     .then((res) => {
        //         console.log(res)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }

    return (
        <form onSubmit={addReviewHandler}>
            <input type="text" name="title" value={article.title} placeholder="title" onChange={handleArticleChange}></input>
            <input type="text" name="writer" value={article.writer} placeholder="writer" onChange={handleArticleChange}></input>
            <input type="text" name="heading" value={reviews.heading} placeholder="headings" onChange={handleReviewChange}></input>
            <input type="text" name="info" value={reviews.info} placeholder="body text" onChange={handleReviewChange}></input>
            <input type="text" name="img" value={article.img} placeholder="images" onChange={handleArticleChange}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddReview;