import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'

const reviewpage = () => {
    const [reviews, setReviews] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3000/reviews')
            .then((res) => {
                console.log(res.data)
                setReviews(res.data)
            })
    }, [])

    const ShowReviews = () => {
        return reviews.map(review => {
            return (
                <div className="reviews">
                    <div>
                        <h1>{reviews.title}</h1>
                        <h4>{reviews.writer}</h4>
                    </div>
                    <div>

                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <ShowReviews></ShowReviews>
        </div>
    );
};

export default reviewpage;