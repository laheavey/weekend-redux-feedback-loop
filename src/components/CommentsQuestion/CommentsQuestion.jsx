import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function CommentsQuestion () {
    const dispatch = useDispatch();
    const [commentsInput, setCommentsInput] = useState('');

    const handleInput = () => {
        console.log(commentsInput);
        dispatch({
            type: 'SET_COMMENTS_ANSWER',
            payload: commentsInput
        })
    }
    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <form>
                <input 
                required
                type='text' 
                placeholder='Enter comments here.'
                value={commentsInput}
                onChange={(event) => setCommentsInput(event.target.value)}></input>
                <button onClick={handleInput}>
                    <Link to='/ReviewFeedback'>
                    NEXT
                    </Link>
                </button>
            </form>
        </>

    )
}

export default CommentsQuestion;

