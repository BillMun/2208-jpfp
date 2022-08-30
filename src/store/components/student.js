import axios from "axios";

//action types
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'
const GET_STUDENT ='GET_STUDENT'

//action creators
function getAllStudents (students) {
    return {type: GET_ALL_STUDENTS, students}
}
function getStudent (student){
    return {type: GET_STUDENT, student}
}

//action reducers
const initialState = []

export const studentsReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_ALL_STUDENTS:
            return action.students
        default:
            return state
    }
}

export const studentReducer = (state={}, action)=>{
    switch(action.type){
        case GET_STUDENT:
            return action.student
        default:
            return state
    }
}

//axios thunks
export function fetchAllStudents (){
    return async function getAllStudentsThunk (dispatch){
        try{
            const {data} = await axios.get('/api/students')
            return dispatch(getAllStudents(data))
        }catch(err){
            console.log(err)
        }
    }
}

export function fetchStudent (id) {
    return async function getStudentThunk (dispatch){
        try{
            const {data} = await axios.get(`/api/students/${id}`)
            return dispatch(getStudent(data))
        }catch(err){
            console.log(err)
        }
    }
}