import axios from 'axios'
import React from 'react'

//action types
const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'
const CREATE_CAMPUS = 'CREATE_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'
const UPDATE_CAMPUS2 ='UPDATE_CAMPUS2'


//action creators
function getAllCampuses (campuses) {
    return {type: GET_ALL_CAMPUSES, campuses }
}
export function getCampus(campus){
    return {type: GET_CAMPUS, campus}
}
function createCampusAction(campus){
    return {type: CREATE_CAMPUS, campus}
}
function deleteCampusAction(campus){
    return {type: DELETE_CAMPUS, campus}
}
function updateCampusAction(campus){
    return {type: UPDATE_CAMPUS, campus}
}
function updateCampusAction2(campus){
    return {type:UPDATE_CAMPUS2, campus}
}

//reducers i had to split the reducers in two
//one for single one for all due to not wanting to deal with different initial states
//after getting to tier 5 I realize that it might not have been great to do this. 
//I am having to repeat some code due to this, but it is what it is.
const initialState = []

export const campusesReducer = (state=initialState, action)=>{
    switch (action.type){
        case GET_ALL_CAMPUSES:
            return action.campuses
        case CREATE_CAMPUS:
            return [...state, action.campus]
        case DELETE_CAMPUS:
            return state.filter((campus)=> campus.id !== action.campus.id)
        case UPDATE_CAMPUS2:
            return state.map((campus)=>
            campus.id===action.campus.id ? action.campus:campus)
        default:
            return state
    }
}

export const campusReducer = (state={}, action)=>{
    switch (action.type){
        case GET_CAMPUS:
            return {...state, state:action.campus}
        case UPDATE_CAMPUS:
            return {...state, state:action.campus}
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
            const {data:created} = await axios.post('/api/campuses/', campus)

            dispatch(createCampusAction(created))
        }catch(error){console.log(error)}
    }
}

export function deleteCampus (id){
    return async function deleteCampusThunk(dispatch){
        try{
            const {data} = await axios.delete(`/api/campuses/${id}`)
            dispatch(deleteCampusAction(data))
        }catch(error){console.log(error)}
    }
}

export function updateCampus (campus){
    return async function updateCampusThunk(dispatch){
        try{
            const {data} = await axios.put(`/api/campuses/${campus.id}`,campus)
            dispatch(updateCampusAction(data))
            dispatch(getCampus(data))
            dispatch(updateCampusAction2(data))
        }catch(error){console.log(error)}
    }
}