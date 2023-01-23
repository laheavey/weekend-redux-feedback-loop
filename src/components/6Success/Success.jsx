import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Confirms successful submission for the user, dispatches
// an action to clear all answer values.

function Success () {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'CLEAR_ANSWER',
            payload: ''
        })
    })

    return (
        <>
        <h2>Successfully submitted!</h2>
        <button>
            <Link to='/'>
            Leave New Feedback
            </Link>
        </button>
        </>
    )
}

export default Success;