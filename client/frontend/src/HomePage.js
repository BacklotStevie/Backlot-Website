import React from 'react';
import ReviewPage from './Components/reviewpage';
import { CardDeck } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Logo from './Components/backlot-logo.png'

const HomePage = () => {
    return (
        <div className="container">
            <div className="row jumbotron col-12 m-1 mt-5 mb-5">
                <div className='col-6'>
                    <img className="featured-jumbo" src={Logo} />
                </div>
                <div className="container col-6">

                    <h1 className="display-5">Title</h1>
                    <p className="lead">This is a modified jumbotron that occupies.</p>
                </div>
            </div>

            <h3 className="text-center sections">PODCASTS</h3>

            <CardDeck className="podcasts pb-3">
                <Card>
                    <Card.Img variant="top" src="https://turbologo.com/articles/wp-content/uploads/2019/10/youtube-logo-illustration-1280x720.jpg" />
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
                    <Card.Img variant="top" src="https://turbologo.com/articles/wp-content/uploads/2019/10/youtube-logo-illustration-1280x720.jpg" />
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
                    <Card.Img variant="top" src="https://turbologo.com/articles/wp-content/uploads/2019/10/youtube-logo-illustration-1280x720.jpg" />
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

export default HomePage;