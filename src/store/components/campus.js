import axios from 'axios'

//action types
const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'
const CREATE_CAMPUS = 'CREATE_CAMPUS'


//action creators
function getAllCampuses (campuses) {
    return {type: GET_ALL_CAMPUSES, campuses }
}
function getCampus(campus){
    return {type: GET_CAMPUS, campus}
}
function createCampusAction(campus){
    return {type: CREATE_CAMPUS, campus}
}

//reducers i had to split the reducers in two
//one for single one for all due to not wanting to deal with different initial states
const initialState = []

export const campusesReducer = (state=initialState, action)=>{
    switch (action.type){
        case GET_ALL_CAMPUSES:
            return action.campuses
        case CREATE_CAMPUS:
            return [...state, action.campus]
        default:
            return state
    }
}
export const campusReducer = (state={}, action)=>{
    switch (action.type){
        case GET_CAMPUS:
            return action.campus
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

export function fetchCampus(id){
    return async function getCampusThunk (dispatch){
        try{
            const {data} = await axios.get(`/api/campuses/${id}`)
            return dispatch(getCampus(data))
        }catch(err){
            console.log(err)
        }
    }
}

export function createCampus(campus){
    return async function createCampusThunk(dispatch){
        try{
            const {data:created} = await axios.post(`/api/campuses/`, campus)
            dispatch(createCampusAction(created))
            location.href='/campuses'
        }catch(error){console.log(error)}
    }
}