import React from 'react';
import ReviewPage from './Components/reviewpage'

const ReviewsPage = () => {
    return (
        <div className="container-fluid p-4">
            <div className="row review-container">
                <ReviewPage />
            </div>
        </div>

    );
};

export default ReviewsPage;