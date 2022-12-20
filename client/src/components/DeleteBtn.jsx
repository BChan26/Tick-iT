import React from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"

const DeleteBtn = () => {
    let { id } = useParams()
    console.log(id)
    
    const handleDelete = async () => {
        await axios.delete(`http://localhost:8000/events/${id}`)
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteBtn