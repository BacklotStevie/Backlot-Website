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
                    <div className="col-4">
                        <div>
                            <h1>{review.title}</h1>
                            <h4>{review.writer}</h4>
                        </div>

                        {/* <div>
                            {review.reviews?.map((nestedReview) =>
                                <>
                                    <h3>{nestedReview.heading}</h3>
                                    <p>{nestedReview.info}</p>
                                </>
                            )}
                        </div> */}

                        <div>
                            <Link to={`/reviews/${review._id}`}><h6 style={{ "margin-bottom": '5rem' }}>Review Details</h6></Link>
                        </div>
                    </div>
            )
        })
    }

    return (
        <div className="row col-12">
            <ShowReviews />
        </div>
    );
};

export default ReviewPage;