import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DeleteBtn from "./DeleteBtn.jsx"

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
    <div className="mt-6 eventDetails">
      <h1 className="flex justify-center font-bold">{event.eventname}</h1>
      <h2 className="flex justify-center">{event.datetime}</h2>
      <h2 className="flex justify-center">{event.price}</h2>
      <h2 className="flex justify-center">{event.details}</h2>
      <div className="flex justify-center">
        <DeleteBtn></DeleteBtn>{" "}
      </div>
    </div>
  ) : (
    <h1> event not found</h1>
  )
}

export default EventDetails
