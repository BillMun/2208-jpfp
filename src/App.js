import React from "react";
import {useDispatch} from 'react-redux'
import AllStudents from "./components/AllStudents";
import {useEffect} from 'react'
import { fetchAllStudents } from "./store/components/student";
import {Routes, Route, Link} from 'react-router-dom'
import SplashPage from "./components/SplashPage";
import NavBar from "./components/NavBar";
import AllCampuses from "./components/AllCampuses";
import { fetchAllCampuses } from "./store/components/campus";
function App(){
    const dispatch = useDispatch()
    
    useEffect(()=>{
        console.log('hello?')
        dispatch(fetchAllStudents())
        dispatch(fetchAllCampuses())
    },[])

    return(
        <div id='main'>
            <NavBar/>
            <Routes>
                <Route index element={<SplashPage/>}/>
                <Route path ={'/students'} element ={<AllStudents/>}/>
                <Route path = {'/campuses'} element ={<AllCampuses/>}/>
            </Routes>
        </div>
    )
}

export default App;