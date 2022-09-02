import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import loggingMiddleware from 'redux-logger'
import {campusesReducer, campusReducer} from "./components/campus";
import {studentsReducer, studentReducer} from "./components/student";

const rootReducer = combineReducers({
    students:studentsReducer,
    campuses:campusesReducer,
    campus:campusReducer,
    student:studentReducer,
})

const store = createStore(rootReducer, 
    applyMiddleware(thunk, loggingMiddleware)
)

export default store;