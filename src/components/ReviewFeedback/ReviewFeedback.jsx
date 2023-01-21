import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ReviewFeedback () {
    const feelingAnswer = useSelector(store => store.feelingAnswer);
    const understandingAnswer = useSelector(store => store.understandingAnswer);
    const supportAnswer = useSelector(store => store.supportAnswer);
    const commentsAnswer = useSelector(store => store.commentsAnswer);

    return (
        <>
            <h2>Review Your Feedback</h2>
            <li>Feelings: {feelingAnswer}</li>
            <li>Understanding: {understandingAnswer}</li>
            <li>Support: {supportAnswer}</li>
            <li>Comments: {commentsAnswer}</li>
        </>
        
    )
}

export default ReviewFeedback;