import React from "react";
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { fetchAllStudents } from "./store/components/student";
import {Routes, Route, Link} from 'react-router-dom'
import { AllCampuses, AllStudents, NavBar, CreateStudent,
    SingleCampus, SplashPage, SingleStudent, CreateCampus } from "./components";
import { fetchAllCampuses } from "./store/components/campus";



function App(){
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchAllStudents())
        dispatch(fetchAllCampuses())
    },[dispatch])

    return(
        <div id='main'>
            <NavBar/>
            <Routes>
                <Route index element={<SplashPage/>}/>
                <Route path ={'/students'} element ={<AllStudents/>}/>
                <Route path = {'/campuses'} element ={<AllCampuses/>}/>
                <Route path = {'/campuses/:id'} element={<SingleCampus/>}/>
                <Route path = {'/students/:id'} element= {<SingleStudent/>}/>
                <Route path = {'/campuses/create'} element = {<CreateCampus/>}/>
                <Route path = {'/students/create'} element = {<CreateStudent/>}/>
            </Routes>
        </div>
    )
}

export default App;