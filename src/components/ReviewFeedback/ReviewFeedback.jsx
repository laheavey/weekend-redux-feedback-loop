import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ReviewFeedback () {
    const feelingAnswer = useSelector(store => store.feelingAnswer);
    
    return (
        <>
            <h2>Review Your Feedback</h2>
            <li>Feelings: {feelingAnswer}</li>
        </>
        
    )
}

export default ReviewFeedback;