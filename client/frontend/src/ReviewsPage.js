import React from 'react';
import ReviewPage from './Components/reviewpage'

const ReviewsPage = () => {
    return (
        <div className="container-fluid p-4">
            <div className="row review-container">
                <div className="container text-center pt-5">
                    <button className="divider-button bg-dark" disabled></button>
                    <h1 className="pt-3">Backlot Reviews</h1>
                </div>
                <ReviewPage />
            </div>
        </div>

    );
};

export default ReviewsPage;