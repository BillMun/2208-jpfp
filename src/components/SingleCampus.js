import React, {useEffect, useState} from 'react'
import { fetchCampus } from '../store/components/campus'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import UpdateCampus from './UpdateCampus'
import { updateStudent } from "../store/components/student";

function SingleCampus (){
    const dispatch = useDispatch()
    const params = useParams()


    const [value, setValue] = useState(true)
    useEffect(()=>{
        dispatch(fetchCampus(params.id))
        dispatch(fetchCampus(params.id))
    },[value])

    let campus = useSelector(state=>state.campus).state
    
    return(<>
            {campus ? <>
            <div className='outerContainer'>
                <div className='single'>
                    <h1>{campus.name}</h1>
                    <img src={campus.imageUrl} />
                    <p>{campus.description}</p>
                    <p>Located at: {campus.address}</p>
                    {campus.students.length ?
                        <ul>Enrolled Students
                        {campus.students.map(student=>
                        <div key={student.id}>
                        <Link key={student.id} to ={`/students/${student.id}`}>
                            <li>{student.firstName} {student.lastName}</li>
                        </Link>
                        <button onClick={()=>{
                            setValue(!value)
                            dispatch(updateStudent({campusId: null, id:student.id}))
                            }}>Unregister</button>
                        </div>
                    )}</ul>:<p>No students are enrolled!</p>}
                </div>     
                <div className='createContainer'>
                    <UpdateCampus campus={campus}/>
                </div>
             </div>
            </>:null}
            </>
    )
}

export default SingleCampus