import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

const feelingAnswer = (state=[], action) => {
    if (action.type === 'SET_FEELING_ANSWER'){
        return action.payload;
    }
    return state;
}

const understandingAnswer = (state, action) => {
    if (action.type === 'SET_UNDERSTANDING_ANSWER'){
        return action.payload;
    }
    return state;
}

const supportAnswer = (state, action) => {
    if (action.type === 'SET_SUPPORT_ANSWER'){
        return action.payload;
    }
    return state;
}

const commentsAnswer = (state, action) => {
    if (action.type === 'SET_COMMENTS_ANSWER'){
        return action.payload;
    }
    return state;
}

const reduxStore = createStore (
    combineReducers({
        feelingAnswer
    //     understandingAnswer,
    //     supportAnswer,
    //     commentsAnswer
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
