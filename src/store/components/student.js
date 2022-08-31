import axios from "axios";

//action types
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'
const GET_STUDENT ='GET_STUDENT'
const CREATE_STUDENT='CREATE_STUDENT'
const DELETE_STUDENT='DELETE_STUDENT'

//action creators
function getAllStudents (students) {
    return {type: GET_ALL_STUDENTS, students}
}
function getStudent (student){
    return {type: GET_STUDENT, student}
}
function createStudentAction(student){
    return {type: CREATE_STUDENT, student}
}
function deleteStudentAction(student){
    return {type: DELETE_STUDENT, student}
}

//action reducers
const initialState = []

export const studentsReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_ALL_STUDENTS:
            return action.students
        case CREATE_STUDENT:
            return [...state, action.student]
        case DELETE_STUDENT:
            return state.filter((student)=>student.id !==action.student.id)
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

export function createStudent(student){
    return async function createStudentThunk(dispatch){
        try{
            const {data:created} = await axios.post(`/api/students/`, student)
            dispatch(createStudentAction(created))          
        }catch(error){console.log(error)}
    }
}

export function deleteStudent(id){
    return async function deleteStudentThunk(dispatch){
        try{
            const {data}= await axios.delete(`/api/students/${id}`)
            dispatch(deleteStudentAction(data))
        }catch(error){console.log(error)}
    }
}