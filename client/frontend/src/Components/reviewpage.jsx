import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ReviewPage = () => {
    const [reviews, setReviews] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3000/reviews')
            .then((res) => {
                debugger
                console.log(res.data)
                setReviews(res.data)
            })
    }, [])
    debugger
    const ShowReviews = () => {
        return reviews && reviews.map((review) => {
            return (
                <div className="story col-xs-12 col-sm-4">
                    <div className="story-info">
                        <div>
                            <Link to={`/reviews/${review._id}`}><h1>{review.title}</h1></Link>
                            <h4>{review.writer}</h4>
                        </div>

                    </div>
                    
                    {/* <div>
                            {review.reviews?.map((nestedReview) =>
                                <>
                                    <h3>{nestedReview.heading}</h3>
                                    <p>{nestedReview.info}</p>
                                </>
                            )}
                        </div> */}


                </div>
            )
        })
    }

    return (
        <div className="container-fluid">
            <div className="review-contianer row">
                <ShowReviews />
            </div>
        </div>

    );
};

export default ReviewPage;