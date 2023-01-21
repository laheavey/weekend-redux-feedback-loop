import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SupportQuestion () {
    const dispatch = useDispatch();
    const [supportInput, setSupportInput] = useState('');

    const handleInput = () => {
        dispatch({
            type: 'SET_SUPPORT_ANSWER',
            payload: supportInput
        })
    };

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

