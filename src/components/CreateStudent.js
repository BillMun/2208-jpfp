import React, {useState} from 'react'
import { createStudent } from '../store/components/student'
import {useDispatch, useSelector} from 'react-redux'


function CreateStudent () {
    const [newStudent, setNewStudent]=useState({})
    const campuses = useSelector(state=>state.campuses)
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
        setNewStudent({
            ...newStudent,
            campusId: event.target.select
        })
        console.log(newStudent)
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
            <label>Campus</label>
                <select onClick={(event)=>{
                    let valuesArr = event.target.value.split(',')
                    setNewStudent({
                    ...newStudent,
                    campusId:Number(valuesArr[0]),
              
                })}}>
                    {campuses.map(campus=>
                        <option key={campus.id} value={campus.id}>{campus.name}</option>)}
                    <option>None</option>
                </select>
            <button type='submit'>Create</button>
        </form>
    )
}

export default CreateStudent