import React from 'react';
import ReviewPage from './Components/reviewpage'

const ReviewsPage = () => {
    return (
        <div className="container-fluid p-4">
            <div className="row review-container text-center">
                <div className="container section-divider pt-5">
                    <button className="divider-button bg-dark" disabled></button>
                </div>
                <ReviewPage />
            </div>
        </div>

    );
};

export default ReviewsPage;