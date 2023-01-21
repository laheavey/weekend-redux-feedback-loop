import { Link } from 'react-router-dom';

function UnderstandingQuestion () {
    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <form>
                <input type='number'></input>
                <button>
                    <Link to='/SupportQuestion'>
                    NEXT
                    </Link>
                </button>
            </form>
        </>

    )
}

export default UnderstandingQuestion;

