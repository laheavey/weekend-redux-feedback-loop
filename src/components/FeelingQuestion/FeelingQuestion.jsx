import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function FeelingQuestion () {
    const dispatch = useDispatch();
    const [feelingInput, setFeelingInput] = useState('');

    const handleInput = () => {
        dispatch({
            type: 'SET_FEELING_ANSWER',
            payload: feelingInput
        })
    }
    
    return (
        <>
            <h2>How are you feeling today?</h2>
            <form>
                <input 
                required
                type='number'
                value={feelingInput}
                onChange={(event) => setFeelingInput(event.target.value)}
                ></input>
                
                {feelingInput 
                    ? 
                    <button onClick={handleInput}>
                        <Link to='/UnderstandingQuestion'>NEXT</Link>
                    </button>
                    : 
                    <button>NEXT</button>
                }  
            </form>
        </>

    )
}

export default FeelingQuestion;

