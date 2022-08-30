import React, {useEffect} from 'react'
import { fetchCampus } from '../store/components/campus'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function SingleCampus (){
    const dispatch = useDispatch()
    const params = useParams()

    const campus = useSelector(state=>state.campus)

    useEffect(()=>{
        dispatch(fetchCampus(params.id))
    },[dispatch])

    return(
        <div className='single'>
            {campus.id ? <>
            <h1>{campus.name}</h1>
            <img src={campus.imageUrl} />
            <p>{campus.description}</p>
            <p>Located at: {campus.address}</p>
            {campus.students.length ?
                <ul>Enrolled Students
                    {campus.students.map(student=>
                    <Link key={student.id} to ={`/students/${student.id}`}>
                        <li>{student.firstName} {student.lastName}</li>
                    </Link>
            )}</ul>:<p>No students are enrolled!</p>}

            </>:null}
        </div>
    )
}

export default SingleCampus