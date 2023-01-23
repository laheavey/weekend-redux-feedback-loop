import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

function FeelingQuestion () {
    const dispatch = useDispatch();
    const routeMatch = useRouteMatch();
    const [feelingInput, setFeelingInput] = useState('');

    const feelingAnswer = useSelector(store => store.feelingAnswer);
    
    // Runs dispatch, sends input. If input already exists 
    // from previous submission, it is overwritten.
    const handleDispatch = () => {
        dispatch({
            type: 'SET_FEELING_ANSWER',
            payload: feelingInput
        })
    }

    const checkIfEdit = () => {
        if (routeMatch.path.includes('Edit')) {
            return '/ReviewFeedback';
        } else {
            return '/UnderstandingQuestion';
        }
    }

    // Renders page asking for rating of feeling. A
    // value is required; input is dispatched when the 
    // 'NEXT' button is clicked, and the next page is loaded.
    return (
        <>
        <h2>How are you feeling today?</h2>
        <form>
            <input 
            required
            type='number'
            value={feelingInput}
            placeholder={feelingAnswer}
            onChange={(event) => setFeelingInput(event.target.value)}
            ></input>
            <button onClick={handleDispatch}>
            <Link to={checkIfEdit}>NEXT</Link>
            </button> 
        </form>
        </>

    )
}

export default FeelingQuestion;

