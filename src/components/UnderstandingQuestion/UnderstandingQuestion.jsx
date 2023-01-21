import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function UnderstandingQuestion () {
    const dispatch = useDispatch();
    const [understandingInput, setUnderstandingInput] = useState('');

    const handleInput = () => {
            dispatch({
                type: 'SET_UNDERSTANDING_ANSWER',
                payload: understandingInput
            })
    };

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

