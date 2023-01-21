import { Link } from 'react-router-dom';

function FeelingQuestion () {
    return (
        <>
            <h2>How are you feeling today?</h2>
            <form>
                <input type='number'></input>
                <button>
                    <Link to='/UnderstandingQuestion'>
                    NEXT
                    </Link>
                </button>
            </form>
        </>

    )
}

export default FeelingQuestion;

