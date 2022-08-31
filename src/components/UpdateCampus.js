import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { updateCampus } from '../store/components/campus'

function UpdateCampus (props) {
    const dispatch = useDispatch()
    const [form, setForm] = useState({})
    const handleChange = props => event =>{
        setForm({
            ...form,
            [props]:event.target.value
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        dispatch(updateCampus({...form, id:props.campus.id}))
    }

    return(
        <form onSubmit={handleSubmit}className='update'>
            <label>Update Campus Name:</label>
                <input type='text' onChange={handleChange('name')}/>
            <label>Update Campus Address:</label>
                <input type='text' onChange={handleChange('address')}/>
            <label>Update Campus Description:</label>
                <input type='text' onChange={handleChange('description')}/>
            <button type='submit'>Update</button>
        </form>
    )
}
export default UpdateCampus