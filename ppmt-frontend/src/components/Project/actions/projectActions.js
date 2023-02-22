import axios from "axios";
import { GET_ERRORS } from "./types";

export const createProject = (project, navigate) => async dispatch => {
    // const navigate = useNavigate();

    console.log('Function createProject() has been called 2'); 

    try {
        const response = await axios.post('http://localhost:8080/api/project', project);
        navigate('/dashboard')

   } catch (error) {
    console.log('Function createProject() has been called 4 -- ERROR!!!'); 
        if (error.response && error.response.data) {
            dispatch({
            type: GET_ERRORS,
            payload: error.response.data
            });
        } else {
            console.error("An unexpected error occurred:", error);
        }
    }

}