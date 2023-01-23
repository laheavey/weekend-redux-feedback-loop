import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

function SupportQuestion () {
    const dispatch = useDispatch();
    const routeMatch = useRouteMatch();
    const [supportInput, setSupportInput] = useState('');

    const supportAnswer = useSelector(store => store.supportAnswer);

    // Runs dispatch, sends input. If input already exists 
    // from previous submission, it is overwritten.
    const handleDispatch = () => {
        dispatch({
            type: 'SET_SUPPORT_ANSWER',
            payload: supportInput
        })
    };

    const checkIfEdit = () => {
        if (routeMatch.path.includes('Edit')) {
            return '/ReviewFeedback';
        } else {
            return '/CommentsQuestion';
        }
    }

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
            placeholder={supportAnswer}
            onChange={(event) => setSupportInput(event.target.value)}
            ></input>
                <button onClick={handleDispatch}>
                <Link to={checkIfEdit}>NEXT</Link>
                </button>
        </form>
        </>
    )
}

export default SupportQuestion;

