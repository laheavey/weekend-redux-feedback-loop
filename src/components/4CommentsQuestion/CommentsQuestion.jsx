import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

function CommentsQuestion () {
    const dispatch = useDispatch();
    const [commentsInput, setCommentsInput] = useState('');

    const commentsAnswer = useSelector(store => store.commentsAnswer);

    // Runs dispatch, sends input. If input already exists 
    // from previous submission, it is overwritten (even if
    // input is nothing).
    const handleDispatch = () => {
        dispatch({
            type: 'SET_COMMENTS_ANSWER',
            payload: commentsInput
        })
    }

    // Renders feedback page asking for comments. Any value
    // entered (including nothing) is dispatched when the 
    // 'NEXT' button is clicked, and the next page is loaded.
    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <form>
                <input 
                type='text' 
                label='Enter comments here.'
                placeholder={commentsAnswer}
                value={commentsInput}
                onChange={(event) => setCommentsInput(event.target.value)}
                ></input>
                <button onClick={handleDispatch}>
                <Link to='/ReviewFeedback'>NEXT</Link>
                </button>
            </form>
        </>

    )
}

export default CommentsQuestion;

