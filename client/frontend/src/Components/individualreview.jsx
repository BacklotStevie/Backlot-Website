import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const IndividualReview = (props) => {
    const [individual, setIndividual] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:3000/reviews/${props.match.params.id}`)
            .then((res) => {
                debugger
                console.log(res.data)
                setIndividual(res.data)
            })
    }, [])
    debugger

    const ShowIndividual = () => {

        return (
            <div className="reviews">
                <div>
                    <h1>{individual?.title}</h1>
                    <h4>{individual?.writer}</h4>
                </div>

                <div>
                    {individual?.reviews?.map((nestedInfo) =>
                        <>
                            <h3>{nestedInfo.heading}</h3>
                            <p>{nestedInfo.info}</p>
                        </>
                    )}
                </div>

                <div>
                    <Link to={`/reviews/edit/${individual._id}`}>Edit</Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <ShowIndividual />
        </div>
    );
};



export default IndividualReview;