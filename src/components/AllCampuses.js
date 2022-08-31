import React from "react";
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import CreateCampus from "./CreateCampus";

function AllCampuses (){
    const campuses = useSelector(state=>state.campuses)
    return(
        <div className = 'container'>
        {campuses && campuses.length ?
            campuses.map((campus) =><div className='innerContainer' key={campus.id}>
                <Link to = {`/campuses/${campus.id}`}>
                    <h4>Campus Name: {campus.name}</h4>
                </Link>
                {campus.students ?
                <h4>Total Students: {campus.students.length}</h4>
                :<h4>Total Students: 0</h4>
                }
                <img className='img' src= {campus.imageUrl}/>
                </div>
            ):null }
            <div className='createContainer'>
            <CreateCampus/>
            </div>
        </div>)
        
}
export default AllCampuses