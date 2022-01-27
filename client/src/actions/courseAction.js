import axios from "axios";



export const registerCourse = (course) => async (dispatch) => {
    dispatch({ type: "NEW_COURSE_REQUEST" });
  
    try {
      const response = await axios.post("/api/course/courseRegister", course);
      console.log(response);
      dispatch({ type: "NEW_COURSE_SUCCESS" });
    } catch (error) {
      dispatch({ type: "NEW_COURSE_FAILED", payload: error });
    }
  };


  export const getallcourse = () => async (dispatch) => {
    dispatch({ type: "GET_COURSES_REQUEST" });
    try {
      const response = await axios.get("/api/course/getallcourses");
      
      dispatch({ type: "GET_COURSES_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_COURSES_FAILED", payload: error });
    }
  };

  export const deleteCourses = (_id) => async dispatch => {
    dispatch({ type: 'DELETE_COURSE_REQUEST' });
    console.log(_id)
    try {
        const response = await axios.post('/api/course/delete',{_id});
        dispatch({ type: 'DELETE_COURSE_SUCCESS', payload: response.data });
        
    } catch (err) {
        dispatch({ type: 'DELETE_COURSE_FAILED', payload: err });
    }
}

export const getbyid = (_id) => async dispatch => {
  dispatch({ type: 'GET_UPDATE_REQUEST' });
  console.log(_id)
  try {
      const response = await axios.post('/api/course/getbyids',{_id});
      dispatch({ type: 'GET_UPDATE_SUCCESS', payload: response.data });
      
  } catch (err) {
      dispatch({ type: 'GET_UPDATE_FAILED', payload: err });
  }
}
 