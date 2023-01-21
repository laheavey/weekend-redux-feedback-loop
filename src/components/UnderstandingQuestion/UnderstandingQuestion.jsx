import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function UnderstandingQuestion () {
    const dispatch = useDispatch();
    const [understandingInput, setUnderstandingInput] = useState('');

    const handleInput = () => {
        console.log(understandingInput);
        dispatch({
            type: 'SET_UNDERSTANDING_ANSWER',
            payload: understandingInput
        })
    }

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
                <button onClick={handleInput}>
                    <Link to='/SupportQuestion'>
                    NEXT
                    </Link>
                </button>
            </form>
        </>

    )
}

export default UnderstandingQuestion;

