import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

function FeelingQuestion () {
    const dispatch = useDispatch();
    const routeMatch = useRouteMatch();
    const [feelingInput, setFeelingInput] = useState('');
    const feelingAnswer = useSelector(store => store.feelingAnswer);
    
    // Runs dispatch, sends input. If input already exists 
    // (ie if this is being edited), answer is overwritten.
    const handleDispatch = () => {
        dispatch({
            type: 'SET_FEELING_ANSWER',
            payload: feelingInput
        })
    };

    // Changes 'next' button navigation depending on how 
    // the user arrived at this page.
    const checkIfEdit = () => {
        if (routeMatch.path.includes('Edit')) {
            return '/ReviewFeedback';
        } else {
            return '/UnderstandingQuestion';
        }
    };

    // Renders page asking for rating of feeling. A
    // value 1-5 is required; input is dispatched when the 
    // 'NEXT' button is clicked, and the next page is loaded.
    // If answer is being edited from previous response, current
    // answer is populated as the placeholder.
    return (
        <>
        <h2>How are you feeling today?</h2>
        <form>
            <input 
            required
            type='number'
            value={feelingInput}
            min='1'
            max='5'
            placeholder={feelingAnswer}
            onChange={(event) => setFeelingInput(event.target.value)}
            ></input>
            {(feelingInput <= 5 && feelingInput >= 1 )
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

export default FeelingQuestion;

