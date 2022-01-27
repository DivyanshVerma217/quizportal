import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = await axios.post("/api/users/register", user);
    console.log(response);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};




export const teacherLogin = (user) => async (dispatch) => {
  dispatch({ type: "TEACHER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/users/login", user);
    dispatch({ type: "TEACHER_LOGIN_SUCCESS", payload: response.data });
    window.location.href = "/teacherscreen";
    localStorage.setItem("currentUser", JSON.stringify(response.data));
  } catch (error) {
    dispatch({ type: "TEACHER_LOGIN_FAILED", payload: error });
  }
};

export const studentLogin = (user) => async (dispatch) => {
  dispatch({ type: "STUDENT_LOGIN_REQUEST" });
  console.log(user);
  try {
    const response = await axios.post("/api/users/login", user);
    dispatch({ type: "STUDENT_LOGIN_SUCCESS", payload: response.data });
    window.location.href = "/studentscreen";
    localStorage.setItem("currentUser", JSON.stringify(response.data));
  } catch (error) {
    dispatch({ type: "STUDENT_LOGIN_FAILED", payload: error });
  }
};

export const logout = () => {
  localStorage.removeItem("currentUser");
  window.location.href = "/";
};
