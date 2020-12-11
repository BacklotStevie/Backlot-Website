import logo from './logo.svg';
import './App.css';
import AddReview from './Components/addreview';
import Header from '../src/Components/header';
import ReviewPage from '../src/Components/reviewpage'
import IndividualReview from '../src/Components/individualreview'
import { Route } from 'react-router-dom'
import EditReview from '../src/Components/editreview'

function App(props) {
  return (
    <>
      <Header />
      <AddReview />
      {/* <ReviewPage /> */}
      <Route exact path="/reviews" render={(props) => <ReviewPage {...props} />} />
      <Route exact path="/reviews/:id" render={(props) => <IndividualReview {...props} />} />
      <Route exact path="/reviews/edit/:id" render={(props) => <EditReview {...props} />} />
    </>
  );
}

export default App;
