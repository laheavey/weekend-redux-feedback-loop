import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

import Header from '../Header/Header';
import FeelingQuestion from '../FeelingQuestion/FeelingQuestion';

import UnderstandingQuestion from '../UnderstandingQuestion/UnderstandingQuestion';
import SupportQuestion from '../SupportQuestion/SupportQuestion';
import CommentsQuestion from '../CommentsQuestion/CommentsQuestion';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

import { HashRouter as Router, Route } from 'react-router-dom';

function App() {

  useEffect(() => {
    fetchFeedback();
  }, [])

  function fetchFeedback (){
    axios({
      method: 'GET',
      url: '/feedback'
    }).then((response) => {
      console.log('Succes in GET /feedback! ', response.data);
    }).catch((error) => {
      console.log('Error in GET /feedback: ', error);
    })
  }

  return (
    <div className='App'>
      <Header />
      <Router>
        <Route exact path='/'>
          <FeelingQuestion />
        </Route>
        <Route exact path='/UnderstandingQuestion'>
          <UnderstandingQuestion />
        </Route>
        <Route exact path='/SupportQuestion'>
          <SupportQuestion />
        </Route>
        <Route exact path='/CommentsQuestion'>
          <CommentsQuestion />
        </Route>
        <Route exact path='/ReviewFeedback'>
          <ReviewFeedback />
        </Route>
        <Route exact path='/Success'>

        </Route>
      </Router>

      

    </div>
  );
}

export default App;
