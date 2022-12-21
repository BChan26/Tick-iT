import React from 'react'
import { useParams } from "react-router-dom"
import Client from '../services/api'

const DeleteBtn = () => {
    let { id } = useParams()
    console.log(id)
    
    const handleDelete = async () => {
        // await axios.delete(`http://localhost:8000/events/${id}`)
        try {
            await Client.delete(`/events/${id}`)
        } catch (error){
            alert("An Error Occured")
        }
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteBtn