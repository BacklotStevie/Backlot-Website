import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const IndividualReview = (props) => {
    const [individual, setIndividual] = useState(false)
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:3000/reviews/${props.match.params.id}`)
            .then((res) => {
                debugger
                console.log(res.data)
                setIndividual(res.data)
            })
    }, [])
    debugger

    const handleOnClick = () => {
        axios.delete(`http://localhost:3000/reviews/${props.match.params.id}`)
            .then((res) => {
                console.log(res)
                history.push("/reviews")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const ShowIndividual = () => {

        return (
            <div className="m-4">
                <div className="story-title m-3">
                    <h1>{individual?.title}</h1>
                    <h4 className="mb-5">{individual?.writer}</h4>
                </div>
                <div className="review-img">
                    <img className="story-img m-auto" src={individual?.img} alt='image'/>
                </div>
                <div className="story-text">
                    {individual?.reviews?.map((nestedInfo) =>
                        <>
                            <h3 className="mt-5">{nestedInfo.heading}</h3>
                            <p className="m-3">{nestedInfo.info}</p>
                        </>
                    )}
                </div>

                <div className="text-center">
                    <Link to={`/reviews/edit/${individual._id}`}><button className="m-3">Edit</button></Link>
                    <button onClick={handleOnClick}>Delete</button>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <ShowIndividual />
            </div>
        </div>
    );
};



export default IndividualReview;