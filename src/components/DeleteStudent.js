import React from 'react'
import { deleteStudent } from '../store/components/student'
import { useDispatch } from 'react-redux'

function DeleteStudent (props){
    const dispatch = useDispatch()
    return(
        <p className='delete' onClick={()=>
            dispatch(deleteStudent(props.student.id))
        }>X</p>
    )
}

export default DeleteStudent