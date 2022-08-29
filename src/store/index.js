import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import loggingMiddleware from 'redux-logger'
import campusReducer from "./components/campus";
import studentReducer from "./components/student";


const store = configureStore({reducer:{
    student: studentReducer,
    campus: campusReducer
}}, applyMiddleware(thunk, loggingMiddleware)
)

export default configureStore;