import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { updateStudent } from '../store/components/student'

function UpdateStudent (props) {
    const dispatch = useDispatch()
    
    const [form, setForm] = useState({})
    const campuses = useSelector(state=>state.campuses)
    
    const handleChange = props => event =>{
        setForm({
            ...form,
            [props]:event.target.value
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        dispatch(updateStudent({...form, id:props.student.id}))
    }

    return(
        <form onSubmit={handleSubmit} className='update'>
            <label>Update First Name:</label>
                <input type='text' onChange={handleChange('firstName')}/>
            <label>Update Last Name:</label>
                <input type='text' onChange={handleChange('lastName')}/>
            <label>Update email:</label>
                <input type='text' onChange={handleChange('email')}/>
            <label>Update GPA</label>
                <input type='text' onChange={handleChange('gpa')}/>
            <label>Campus</label>
                <select onClick={(event)=>{
                    setForm({
                    ...form,
                    campusId:Number(event.target.value),
                })}}>
                    <option>None</option>
                    {campuses.map(campus=>
                        <option key={campus.id} value={campus.id}>{campus.name}</option>)}
                </select>
            <button type='submit'>Update</button>
        </form>
    )
}
export default UpdateStudent