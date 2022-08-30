import React from "react";
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { fetchAllStudents } from "./store/components/student";
import {Routes, Route, Link} from 'react-router-dom'
import { AllCampuses, AllStudents, NavBar, SingleCampus, SplashPage, SingleStudent } from "./components";
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
            </Routes>
        </div>
    )
}

export default App;