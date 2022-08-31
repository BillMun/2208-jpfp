import React, {useState} from 'react'
import { createCampus } from '../store/components/campus'
import {useDispatch} from 'react-redux'


function CreateCampus ({history}) {
    const [newCampus, setNewCampus]=useState({})
    const dispatch = useDispatch()
    const handleChange = props => event => {
        setNewCampus({
            ...newCampus,
            [props]:event.target.value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        setNewCampus({
            ...newCampus,
            students:[]
        })
        dispatch(createCampus(newCampus, history))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Campus Name:</label>
                <input type='text' onChange={handleChange('name')} name='name'/>
            <label>Address</label>
                <input type='text' onChange={handleChange('address')} name='address'/>
            <label>Description</label>
                <input type='text' onChange={handleChange('description')} name='description'/>
            <button type='submit'>Create</button>
        </form>
    )
}

export default CreateCampus