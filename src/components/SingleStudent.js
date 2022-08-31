import React, {useEffect} from 'react'
import { fetchStudent } from '../store/components/student'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import UpdateStudent from './UpdateStudent'

function SingleStudent (){
    const dispatch = useDispatch()
    const params = useParams()
    const student = useSelector(state=>state.student).state
    useEffect(()=>{
        dispatch(fetchStudent(params.id))
    },[dispatch])

    return(
        <div className='single'>
            {student ? <>
            <h1>{student.firstName} {student.lastName}</h1>
            <img src={student.imageUrl} />
            <h4>Email: {student.email}</h4>
            <h4>GPA: {student.gpa}</h4>
            {student.campus ? 
            <Link to = {`/campuses/${student.campus.id}`}>
                <h4>Attends: {student.campus.name}</h4>
            </Link>
            :<h4>Has not picked a Campus yet!</h4>}
            <UpdateStudent student={student}/>
            </>:null}
        </div>
    )
}

export default SingleStudent