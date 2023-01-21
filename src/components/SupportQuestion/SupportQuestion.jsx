import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function SupportQuestion () {
    const dispatch = useDispatch();
    const [supportInput, setSupportInput] = useState('');

    const handleInput = () => {
        console.log(supportInput);
        dispatch({
            type: 'SET_SUPPORT_ANSWER',
            payload: supportInput
        })
    }

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
                <button onClick={handleInput}>
                    <Link to='/CommentsQuestion'>
                    NEXT
                    </Link>
                </button>
            </form>
        </>

    )
}

export default SupportQuestion;

