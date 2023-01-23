import './App.css';
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
import Admin from '../Admin/Admin';

function App() {

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
              <UnderstandingQuestion />
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

        <Route exact path='/Admin'>
          <Admin />
        </Route>

      </Router>

      

    </div>
  );
}

export default App;
