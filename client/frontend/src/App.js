
import './App.css';
import AddReview from './Components/addreview';
import Header from '../src/Components/header';
import ReviewPage from '../src/Components/reviewpage'
import IndividualReview from '../src/Components/individualreview'
import { Route } from 'react-router-dom'
import EditReview from '../src/Components/editreview'
import Footer from '../src/Components/footer';
import Page2 from '../src/Page2'

function App(props) {
  return (
    <>
      <Header />
      <AddReview />
      {/* <ReviewPage /> */}

      
      <Route exact path="/reviews" render={(props) => <Page2 {...props} />} />
      
      <Route exact path="/reviews/:id" render={(props) => <IndividualReview {...props} />} />
      <Route exact path="/reviews/edit/:id" render={(props) => <EditReview {...props} />} />
      <Footer />
    </>
  );
}

export default App;
