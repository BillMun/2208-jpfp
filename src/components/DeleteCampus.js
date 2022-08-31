import React from 'react'
import { deleteCampus } from '../store/components/campus'
import { useDispatch } from 'react-redux'

function DeleteCampus (props){
    const dispatch = useDispatch()
    return(
        <p className='delete' onClick={()=>
            dispatch(deleteCampus(props.campus.id))
        }>X</p>
    )
}

export default DeleteCampus