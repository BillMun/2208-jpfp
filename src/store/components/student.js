import axios from "axios";

//action types
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'

//action creators
function getAllStudents (students) {
    return {type: GET_ALL_STUDENTS, students}
}

//action reducer
const initialState = {}

const studentReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_ALL_STUDENTS:
            return action.students
        default:
            return state
    }
}

//axios thunks
export function fetchAllStudents (){
    return async function getAllStudentsThunk (dispatch){
        try{
            const {data} = await axios.get('/api/campuses')
            return dispatch(getAllStudents(data))
        }catch(err){
            console.log(err)
        }
    }
}
export default studentReducer