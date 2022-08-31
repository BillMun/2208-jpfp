import React, {useEffect, useState} from 'react'
import { fetchCampus } from '../store/components/campus'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import UpdateCampus from './UpdateCampus'
import { updateStudent } from "../store/components/student";

function SingleCampus (){
    const dispatch = useDispatch()
    const params = useParams()

    let campus = useSelector(state=>state.campus).state

    const [value, setValue] = useState('initial')
    useEffect(()=>{
        dispatch(fetchCampus(params.id))
    },[value])

    return(
        <div className='single'>
            {campus ? <>
            <h1>{campus.name}</h1>
            <img src={campus.imageUrl} />
            <p>{campus.description}</p>
            <p>Located at: {campus.address}</p>
            <UpdateCampus campus={campus}/>
            {campus.students.length ?
                <ul>Enrolled Students
                    {campus.students.map(student=>
                    <div key={student.id}>
                    <Link key={student.id} to ={`/students/${student.id}`}>
                        <li>{student.firstName} {student.lastName}</li>
                    </Link>
                    <button onClick={()=>{
                            setValue('updated')
                            dispatch(updateStudent({campusId:null,id:student.id}))
                            }}>Unregister</button>
                    </div>
            )}</ul>:<p>No students are enrolled!</p>}

            </>:null}
        </div>
    )
}

export default SingleCampus