import { Link } from 'react-router-dom';

function SupportQuestion () {
    return (
        <>
            <h2>How well are you being supported?</h2>
            <form>
                <input type='number'></input>
                <button>
                    <Link to='/CommentsQuestion'>
                    NEXT
                    </Link>
                </button>
            </form>
        </>

    )
}

export default SupportQuestion;

