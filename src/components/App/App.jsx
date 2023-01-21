import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import FeelingQuestion from '../FeelingQuestion/FeelingQuestion';

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
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <FeelingQuestion />
      

    </div>
  );
}

export default App;
