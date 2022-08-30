import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import loggingMiddleware from 'redux-logger'
import campusReducer from "./components/campus";
import studentReducer from "./components/student";

const rootReducer = combineReducers({
    students:studentReducer,
    campuses:campusReducer
})

const store = createStore(rootReducer, 
    applyMiddleware(thunk, loggingMiddleware)
)

export default store;