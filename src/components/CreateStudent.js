import React, {useState} from 'react'
import { createStudent } from '../store/components/student'
import {useDispatch} from 'react-redux'


function CreateStudent () {
    const [newStudent, setNewStudent]=useState({})

    const dispatch = useDispatch()

    const handleChange = props => event => {
        setNewStudent({
            ...newStudent,
            [props]:event.target.value
        })
        if(props==='gpa'){
            setNewStudent({
                ...newStudent,
                [props]:Number(event.target.value)
            })
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        dispatch(createStudent(newStudent))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>First Name:</label>
                <input type='text' onChange={handleChange('firstName')} name='firstName'/>
            <label>Last Name:</label>
                <input type='text' onChange={handleChange('lastName')} name='lastName'/>
            <label>Email</label>
                <input type='text' onChange={handleChange('email')} name='email'/>
            <label>GPA</label>
                <input type='text' onChange={handleChange('gpa')} name='gpa'/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CreateStudent