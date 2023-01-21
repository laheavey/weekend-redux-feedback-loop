import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function SupportQuestion () {
    const dispatch = useDispatch();
    const [supportInput, setSupportInput] = useState('');

    // Runs dispatch, sends input. If input already exists 
    // from previous submission, it is overwritten.
    const handleInput = () => {
        dispatch({
            type: 'SET_SUPPORT_ANSWER',
            payload: supportInput
        })
    };

    // Renders page asking for rating of support. A
    // value is required; input is dispatched when the 
    // 'NEXT' button is clicked, and the next page is loaded.
    return (
        <>
        <h2>How well are you being supported?</h2>
        <form>
            <input 
            required
            type='number'
            value={supportInput}
            onChange={(event) => setSupportInput(event.target.value)}
            ></input>
            {supportInput 
                ? 
                <button onClick={handleInput}>
                <Link to='/CommentsQuestion'>NEXT</Link>
                </button>
                : 
                <button>NEXT</button>
            }  
        </form>
        </>
    )
}

export default SupportQuestion;

