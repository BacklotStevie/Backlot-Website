import React from 'react';
import ReviewPage from '../src/Components/reviewpage';
import { CardDeck } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

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

            <h3 className="text-center sections">PODCASTS</h3>

            <CardDeck className="podcasts">
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center">Watch</h6>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center">Watch</h6>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center">Watch</h6>
                    </Card.Footer>
                </Card>
            </CardDeck>


            <h3 className="text-center sections">BLOG POSTS</h3>

            <ReviewPage />

        </div>
    );
};

export default Page1;