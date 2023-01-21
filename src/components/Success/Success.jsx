import { Link } from 'react-router-dom';

// Renders page asking for rating of understanding. A
// value is required; input is dispatched when the 
// 'NEXT' button is clicked, and the next page is loaded.

function Success () {
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