import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import './Admin.css';
import AdminTableItems from "./AdminTableItems";

function Admin () {
    const dispatch = useDispatch();
    const surveyResponses = useSelector(store => store.surveyResponses);

    // Runs GET on loading.
    useEffect(() => {
        fetchFeedback();
    }, []);

    // GET route; if successful, dispatches survey responses.
    function fetchFeedback (){
        axios({
        method: 'GET',
        url: '/feedback'
        })
        .then((response) => {
            console.log('Succes in GET /feedback! ');
            dispatch({
                type: 'SET_SURVEY_RESPONSES',
                payload: response.data
            })
        })
        .catch((error) => {
            console.log('Error in GET /feedback: ', error);
        })
    }
    // END GET route

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Survey ID</th>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Flagged?</th>
                    <th>Date</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {surveyResponses.map((response) => {
                return (
                    <AdminTableItems key={response.id} response={response}/>
                )
            })}
            </tbody>
        </table>
        </>
    )
}

export default Admin;