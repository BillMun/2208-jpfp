import axios from 'axios'

//action types
const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES'


//action creators
function getAllCampuses (campuses) {
    return {type: GET_ALL_CAMPUSES, campuses }
}

//reducers
const initialState = {}

const campusReducer = (state=initialState, action)=>{
    switch (action.type){
        case GET_ALL_CAMPUSES:
            return action.campuses
        default:
            return state
    }
}

//axios thunks
export function fetchAllCampuses (){
    return async function getAllCampusesThunk (dispatch){
        try{
            const {data} = await axios.get('/api/campuses')
            return dispatch(getAllCampuses(data))
        }catch (err){
            console.log(err)
        }
    }
}

export default campusReducer