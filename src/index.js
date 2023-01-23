import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

// Reducers for the data grabbed from the feedback form.
const feelingAnswer = (state=[], action) => {
    switch (action.type) {
        case 'SET_FEELING_ANSWER': return action.payload;
        case 'CLEAR_ANSWER': return [];
    }
    return state;
}

const understandingAnswer = (state=[], action) => {
    switch (action.type) {
        case 'SET_UNDERSTANDING_ANSWER': return action.payload;
        case 'CLEAR_ANSWER': return [];
    }
    return state;
}

const supportAnswer = (state=[], action) => {
    switch (action.type) {
        case 'SET_SUPPORT_ANSWER': return action.payload;
        case 'CLEAR_ANSWER': return [];
    }
    return state;
}

const commentsAnswer = (state=[], action) => {
    switch (action.type) {
        case 'SET_COMMENTS_ANSWER': return action.payload;
        case 'CLEAR_ANSWER': return [];
    }
    return state;
}

const surveyResponses = (state=[], action) => {
    switch (action.type) {
        case 'SET_SURVEY_RESPONSES' : return action.payload;
    }
    return state;
}

const reduxStore = createStore (
    combineReducers({
        feelingAnswer,
        understandingAnswer,
        supportAnswer,
        commentsAnswer,
        surveyResponses
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
