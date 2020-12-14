import React from 'react';
import ReviewPage from '../src/Components/reviewpage';

const Page1 = () => {
    return (
        <div>
            <div className="row jumbotron jumbotron-fluid">
                <div className='col-6'>
                    <img className="featured-jumbo" src="https://cdn.logo.com/hotlink-ok/logo-social.png" />
                </div>
                <div className="container col-6">

                    <h1 className="display-5">Title</h1>
                    <p className="lead">This is a modified jumbotron that occupies.</p>
                </div>
            </div>
            <ReviewPage/>

        </div>
    );
};

export default Page1;