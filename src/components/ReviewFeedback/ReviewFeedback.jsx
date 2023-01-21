import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function ReviewFeedback () {
    const feelingAnswer = useSelector(store => store.feelingAnswer);
    const understandingAnswer = useSelector(store => store.understandingAnswer);
    const supportAnswer = useSelector(store => store.supportAnswer);
    const commentsAnswer = useSelector(store => store.commentsAnswer);

    function handleSubmit (){
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feelingAnswer,
                understanding: understandingAnswer,
                support: supportAnswer,
                comments: commentsAnswer
            }
        }).then((response) => {
            console.log('Success in POST /feedback!', response.data);
        }).catch((error) => {
            console.log('Error in POST /feedback: ', error);
        })
    }

    return (
        <>
            <h2>Review Your Feedback</h2>
            <section>
                <li>Feelings: {feelingAnswer}</li>
                <li>Understanding: {understandingAnswer}</li>
                <li>Support: {supportAnswer}</li>
                <li>Comments: {commentsAnswer}</li>
            </section>
            <button onClick={handleSubmit}>
                <Link to='/Success'>
                SUBMIT
                </Link>
            </button>

        </>
        
    )
}

export default ReviewFeedback;