import { Link } from 'react-router-dom';

function CommentsQuestion () {
    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <form>
                <input type='text' placeholder='Enter comments here.'></input>
                <button>
                    <Link to='/ReviewFeedback'>
                    NEXT
                    </Link>
                </button>
            </form>
        </>

    )
}

export default CommentsQuestion;

