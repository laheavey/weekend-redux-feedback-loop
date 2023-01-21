import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function CommentsQuestion () {
    const dispatch = useDispatch();
    const [commentsInput, setCommentsInput] = useState('');

    // Runs dispatch, sends input. If input already exists 
    // from previous submission, it is overwritten (even if
    // input is nothing).
    const handleInput = () => { 
        dispatch({
            type: 'SET_COMMENTS_ANSWER',
            payload: commentsInput
        })
    };

    // Renders feedback page asking for comments. Any value
    // entered (including nothing) is dispatched when the 
    // 'NEXT' button is clicked, and the next page is loaded.
    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <form>
                <input 
                type='text' 
                placeholder='Enter comments here.'
                value={commentsInput}
                onChange={(event) => setCommentsInput(event.target.value)}
                ></input>
                <button onClick={handleInput}>
                <Link to='/ReviewFeedback'>NEXT</Link>
                </button>
            </form>
        </>

    )
}

export default CommentsQuestion;

