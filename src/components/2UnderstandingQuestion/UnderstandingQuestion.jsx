import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

function UnderstandingQuestion () {
    const dispatch = useDispatch();
    const routeMatch = useRouteMatch();
    const [understandingInput, setUnderstandingInput] = useState('');

    const understandingAnswer = useSelector(store => store.understandingAnswer);

    // Runs dispatch, sends input. If input already exists 
    // from previous submission, it is overwritten.
    const handleDispatch = () => {
        dispatch({
            type: 'SET_UNDERSTANDING_ANSWER',
            payload: understandingInput
        })
    };

    const checkIfEdit = () => {
        if (routeMatch.path.includes('Edit')) {
            return '/ReviewFeedback';
        } else {
            return '/SupportQuestion';
        }
    }

    // Renders page asking for rating of understanding. A
    // value is required; input is dispatched when the 
    // 'NEXT' button is clicked, and the next page is loaded.
    return (
        <>
        <h2>How well are you understanding the content?</h2>
        <form>
            <input 
            required
            type='number'
            value={understandingInput}
            min='1'
            max='5'
            placeholder={understandingAnswer}
            onChange={(event) => setUnderstandingInput(event.target.value)}
            ></input>
            {(understandingInput <= 5 && understandingInput >= 1 )
            ? 
            <button onClick={handleDispatch}>
            <Link to={checkIfEdit}>NEXT</Link>
            </button>
            :
            <button>NEXT</button>
            }
        </form>
        </>
    )
}

export default UnderstandingQuestion;

