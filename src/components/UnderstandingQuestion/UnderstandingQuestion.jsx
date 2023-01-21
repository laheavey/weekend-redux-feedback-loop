import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function UnderstandingQuestion () {
    const dispatch = useDispatch();
    const [understandingInput, setUnderstandingInput] = useState('');

    // Runs dispatch, sends input. If input already exists 
    // from previous submission, it is overwritten.
    const handleInput = () => {
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
            onChange={(event) => setUnderstandingInput(event.target.value)}
            ></input>
            {understandingInput 
                ? 
                <button onClick={handleInput}>
                <Link to='/SupportQuestion'>NEXT</Link>
                </button>
                : 
                <button>NEXT</button>
            } 
        </form>
        </>
    )
}

export default UnderstandingQuestion;

