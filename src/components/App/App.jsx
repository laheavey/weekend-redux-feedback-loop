import './App.css';
import axios from 'axios'; // for unused GET route
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Components for each page (+ header)
import Header from '../Header/Header';
import FeelingQuestion from '../1FeelingQuestion/FeelingQuestion';
import UnderstandingQuestion from '../2UnderstandingQuestion/UnderstandingQuestion';
import SupportQuestion from '../3SupportQuestion/SupportQuestion';
import CommentsQuestion from '../4CommentsQuestion/CommentsQuestion';
import ReviewFeedback from '../5ReviewFeedback/ReviewFeedback';
import Success from '../6Success/Success';

function App() {
// GET route - not used in base mode, made as a reflex. 🤷‍♀️
  // function fetchFeedback (){
  //   axios({
  //     method: 'GET',
  //     url: '/feedback'
  //   }).then((response) => {
  //     console.log('Succes in GET /feedback! ', response.data);
  //   }).catch((error) => {
  //     console.log('Error in GET /feedback: ', error);
  //   })
  // }



// Various routes and components for the web app.  
  return (
    <div className='App'>
      <Header />
      <Router>

        <Route exact path='/'>
          <FeelingQuestion />
        </Route>
            <Route exact path='/Edit'>
              <FeelingQuestion />
            </Route>

        <Route exact path='/UnderstandingQuestion'>
          <UnderstandingQuestion />
        </Route>
            <Route exact path='/UnderstandingQuestion/Edit'>
              <FeelingQuestion />
            </Route>

        <Route exact path='/SupportQuestion'>
          <SupportQuestion />
        </Route>
            <Route exact path='/SupportQuestion/Edit'>
              <SupportQuestion />
            </Route>

        <Route exact path='/CommentsQuestion'>
          <CommentsQuestion />
        </Route>
            <Route exact path='/CommentsQuestion/Edit'>
              <CommentsQuestion />
            </Route>
        
        <Route exact path='/ReviewFeedback'>
          <ReviewFeedback />
        </Route>

        <Route exact path='/Success'>
          <Success />
        </Route>

      </Router>

      

    </div>
  );
}

export default App;
