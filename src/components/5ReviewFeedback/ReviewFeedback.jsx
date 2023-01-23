import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';


function ReviewFeedback () {

    // I can't remember if these are called reducers or selectors,
    // but either way, these values update as the user moves through
    // the feedback form. I called them here today for a serious chat,
    // and also to POST them.
    const feelingAnswer = useSelector(store => store.feelingAnswer);
    const understandingAnswer = useSelector(store => store.understandingAnswer);
    const supportAnswer = useSelector(store => store.supportAnswer);
    const commentsAnswer = useSelector(store => store.commentsAnswer);

    const history = useHistory();

    // POST function; on successful submission, sends the user to 
    // '/Success' page. If error occurs, an alert pops up and the
    // user stays put.
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
            history.push('/Success');

        }).catch((error) => {
            console.log('Error in POST /feedback: ', error);
            alert('Error: Please validate feedback and try again.');
        })
    }

    // Edit button sends user back to page clicked; placeholders indicate
    // the current answer. I could not get values to carry over historically
    // and reroute back to the review page after editing. 
    return (
        <>
        <h2>Review Your Feedback</h2>
        <section>
            <li>Feelings: {feelingAnswer}</li>
            <button><Link to='/Edit'>Edit</Link></button>
            
            <li>Understanding: {understandingAnswer}</li> 
            <button><Link to='/UnderstandingQuestion/Edit'>Edit</Link></button>
            
            <li>Support: {supportAnswer}</li> 
            <button><Link to='/SupportQuestion/Edit'>Edit</Link></button>
            
            <li>Comments: {commentsAnswer}</li> 
            <button><Link to='/CommentsQuestion/Edit'>Edit</Link></button>
        </section>
        <button onClick={handleSubmit}>SUBMIT
        </button>
        </>
    )
}

export default ReviewFeedback;