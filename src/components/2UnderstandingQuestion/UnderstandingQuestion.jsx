import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function UnderstandingQuestion () {
    const dispatch = useDispatch();
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
            placeholder={understandingAnswer}
            onChange={(event) => setUnderstandingInput(event.target.value)}
            ></input>
                <button onClick={handleDispatch}>
                <Link to='/SupportQuestion'>NEXT</Link>
                </button>
        </form>
        </>
    )
}

export default UnderstandingQuestion;

