import React from "react";
import {useSelector} from 'react-redux'

function AllCampuses (){
    const campuses = useSelector(state=>state.campuses)
    
    return(
        <div className = 'container'>
        {campuses && campuses.length ?
            campuses.map((campus) =><div className='innerContainer' key={campus.id}>
                <h4>Campus Name: {campus.name}</h4>
                <h4>Total Students: {campus.students.length}</h4>
                <img className='img' src= {campus.imageUrl}/>

                </div>
            )
            
            :null }
        </div>)
    
}
export default AllCampuses