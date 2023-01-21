import { Link } from 'react-router-dom';

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