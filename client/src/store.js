import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {loginUserReducer, registerUserReducer } from "./reducers/userReducer";
import { courseUserReducer , deleteCourseReducer} from "./reducers/courseReducer";



const FinalReducer = combineReducers({
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    courseUserReducer:courseUserReducer,
    deleteCourseReducer:deleteCourseReducer
 
});

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null


const initialState = {

  loginUserReducer:{
    currentUser : currentUser
  }
  
};

const composeEnhnacers = composeWithDevTools({});

const store = createStore(
  FinalReducer,
  initialState,
  composeEnhnacers(applyMiddleware(thunk))
);

export default store;