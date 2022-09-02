import React from "react";
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import CreateCampus from "./CreateCampus";
import DeleteCampus from "./DeleteCampus";

function AllCampuses (){
    const campuses = useSelector(state=>state.campuses)
    return(
        <div className = 'outerContainer'>
            <div className="contentContainer">
                {campuses && campuses.length ?
                campuses.map((campus) =>
                <div className='innerContainer' key={campus.id}>
                    <Link to = {`/campuses/${campus.id}`}>
                        <h4>Campus Name: {campus.name}</h4>
                    </Link>
                    <img className='containerImg' src= {campus.imageUrl}/>
                    <DeleteCampus campus={campus}/>
                </div>
                ):null }
            </div>
            <div className='createContainer'>
            <CreateCampus/>
            </div>
        </div>)
        
}
export default AllCampuses