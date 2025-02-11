import React, {useState} from 'react'
import { createCampus } from '../store/components/campus'
import {useDispatch} from 'react-redux'


function CreateCampus () {
    const [newCampus, setNewCampus] = useState({})
    const dispatch = useDispatch()

    const handleChange = props => event => {
        setNewCampus({
            ...newCampus,
            [props]:event.target.value
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault()

        if(newCampus.name===null){
            return (<h1>Campus name is required</h1>)
        }
        setNewCampus({
            ...newCampus,
            students:[]
        })
        dispatch(createCampus(newCampus))
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