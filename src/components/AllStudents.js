import React from "react";
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import CreateStudent from "./CreateStudent";
import DeleteStudent from "./DeleteStudent";
import { useEffect, useState } from 'react';

function AllStudents (){
    let students = useSelector(state=>state.students)
    let [state, setState] = useState(false)
    
    useEffect(()=>{},[state])

    const handleClick = (event)=>{
        if(event.target.value==='sortLast'){
            setState(!state)
            students = students.sort((a,b)=>{
                let lastNameA = a.lastName.toLowerCase()
                let lastNameB = b.lastName.toLowerCase()
                if(lastNameA<lastNameB) return -1
                if(lastNameA>lastNameB) return 1
                return 0
            })
        }if(event.target.value==='sortGpa'){
            setState(!state)
            students = students.sort((a,b)=>{
                return b.gpa-a.gpa
            })
        }
    }
    return(
        <div className="header">
            <select onClick = {handleClick}>
                <option value ={'sortLast'}>sort by last name</option>
                <option value = {'sortGpa'}>sort by GPA</option>

            </select>
            <div className='outerContainer'>
                <div className ='contentContainer'>
                    {students && students.length ?
                        students.map((student) =>
                        <div className="innerContainer" key={student.id}>
                            <Link to = {`/students/${student.id}`}>
                                <h4>Full Name: {student.firstName} {student.lastName}</h4>
                            </Link>
                            <img className='containerImg' src= {student.imageUrl}/>
                            <DeleteStudent className='delete' student={student}/>
                        </div>):null}
                </div>
            <div className="createContainer">
                <CreateStudent/>
            </div> 
            </div>
        </div>)
}
export default AllStudents