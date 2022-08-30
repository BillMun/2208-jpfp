import React from "react";
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

function NavBar () {
    const students = useSelector(state=>state.students)
    const campuses = useSelector(state=>state.campuses)
    
    return(
        <div className='navbar'>
            <Link id='navItem' to = '/students'>All Students ({students.length})</Link>
            <Link id='navItem' to = '/campuses'>All Campuses ({campuses.length})</Link>
        </div>
    )
}
export default NavBar