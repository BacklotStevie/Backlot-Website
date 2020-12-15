import React from 'react';
import ReviewPage from '../src/Components/reviewpage';
import { CardDeck } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Logo from './Components/backlot-logo.png'
import Disney from '../src/Disney Investory Day.jpg'
import Mando from '../src/mando.jpg'

const Page1 = () => {
    return (
        <div className="container">
            <div className="jumbotron bg-dark col-12 m-1 mt-5 mb-5">
                <div className=''>
                    <img className="featured-jumbo" src={Disney} />
                </div>
                <div className="container">

                    <h1 className="display-5 text-white"><a href='https://linktr.ee/insidethebacklot/'>Disney Investor Day Mayhem</a></h1>
                    <p className="lead text-white">John and Steven discuss the madness of Disney Investor Day.</p>
                </div>
            </div>

            <h3 className="text-center sections">PODCASTS</h3>

            <CardDeck className="podcasts pb-3">
                <Card className='podcast-card'>
                    <Card.Img variant="top" src={Disney} />
                    <Card.Body>
                        <Card.Title>Disney Investor Day Madness</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John convene to dicuss (mostly) everything announced at Disney Investor Day
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='//linktr.ee/insidethebacklot/'>Listen Now</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src={Mando} />
                    <Card.Body>
                        <Card.Title>HBO Max & <i>The Mandalorian</i></Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John discuss the latest HBO Max news, the last two episodes of <i>The Mandalorian</i> and Cameron Crowe's <i>Almost Famous.</i>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='//linktr.ee/insidethebacklot/'>Listen Now</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://cdn.onebauer.media/one/media/5f3f/a5cc/4074/8e61/f349/288d/tenet-rev-main.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg" />
                    <Card.Body>
                        <Card.Title>Swolelock Holmes, Meth Damon and More!</Card.Title>
                        <Card.Text className="podcast-text">
                            JP fills in for John as he and Steven discuss <i>Tenet</i> and Netflix's <i>Enola Holmes</i> & <i>The Devil All the Time.</i>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='//linktr.ee/insidethebacklot/'>Listen Now</a></h6>
                    </Card.Footer>
                </Card>
            </CardDeck>


            <h3 className="text-center sections">BLOG POSTS</h3>

            <ReviewPage />

        </div>
    );
};

export default Page1;