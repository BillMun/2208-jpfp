import React from "react";
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function AllStudents (){
    const students = useSelector(state=>state.students)
    return(
        <div className ='container'>
        {students && students.length ?
            students.map((student) =><div className="innerContainer" key={student.id}>
                <Link to = {`/students/${student.id}`}>
                    <h4>Full Name: {student.firstName} {student.lastName}</h4>
                </Link>
                {student.campus ? <h4>Attends: {student.campus.name}</h4>:<h4>Has not picked a campus!</h4>}
                <img className='img' src= {student.imageUrl}/>
                </div>
            ):null }
        </div>)
}
export default AllStudents