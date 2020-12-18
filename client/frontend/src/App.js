
import './App.css';
import AddReview from './Components/addreview';
import Header from '../src/Components/header';
import ReviewPage from '../src/Components/reviewpage'
import IndividualReview from '../src/Components/Individualreview'
import { Route } from 'react-router-dom'
import EditReview from '../src/Components/editreview'
import Footer from '../src/Components/footer';
import Adduser from '../src/Components/adduser'
import HomePage from '../src/HomePage'
import ReviewsPage from '../src/ReviewsPage'
import VideoPage from './VideoPage';
import AboutUs from './AboutUs';
import PodcastPage from './podcastpage'
import TeamPage from './teampage'
import Login from "./Components/login"

function App(props) {
  return (
    <>
      <Header />
      {/* <AddReview /> */}


      <Route exact path="/home" render={(props) => <HomePage {...props} />} />
      <Route exact path="/reviews/:id" render={(props) => <IndividualReview {...props} />} />
      <Route exact path="/reviews" render={(props) => <ReviewsPage {...props} />} />

      
      <Route exact path="/reviews/edit/:id" render={(props) => <EditReview {...props} />} />
      <Route exact path="/signup" render={(props) => <Adduser {...props} />} />
      <Route exact path="/login" render={(props) => <Login {...props} />} />
      <Route exact path="/videopage" render={(props) => <VideoPage {...props} />} />
      <Route exact path="/aboutus" render={(props) => <AboutUs {...props} />} />
      <Route exact path="/podcastpage" render={(props) => <PodcastPage {...props} />} />
      <Route exact path="/teampage" render={(props) => <TeamPage {...props} />} />
      <Footer />
    </>
  );
}

export default App;
