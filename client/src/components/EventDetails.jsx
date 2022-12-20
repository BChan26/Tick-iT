import { useEffect, useState  } from "react"
import { useParams } from "react-router-dom"
import DeleteBtn from './DeleteBtn.jsx'

import axios from "axios"

function EventDetails() {
  let { id } = useParams()
console.log(useParams())

  const [event, setEvent] = useState(null)

  useEffect(() => {
    const getEvent = async () => {
      const response = await axios.get(`http://localhost:8000/events/${id}`)

      setEvent(response.data)
    }
    getEvent()
  }, [id])

  return event ? (
    <div className="detail">
      <h1>{event.eventname}</h1>
      <h2>{event.datetime}</h2>
      <h2>{event.price}</h2>
      <h2>{event.details}</h2>
      <DeleteBtn></DeleteBtn>
    </div>
  ) : (
    <h1> event not found</h1>
  )
}

export default EventDetails
