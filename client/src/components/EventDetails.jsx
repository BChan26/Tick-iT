import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DeleteBtn from "./DeleteBtn.jsx"
import moment from "moment"
import Client from '../services/api'

function EventDetails() {
  let { id } = useParams()
  console.log(useParams())

  const [event, setEvent] = useState(null)

  useEffect(() => {
    const getEvent = async () => {
      const response = await Client.get(`/events/${id}`)

      setEvent(response.data)
    }
    getEvent()
  }, [id])

  return event ? (
    <div className="mt-6 eventDetails">
      <div className="flex justify-center eventImageCard">
        <div
          style={{
            backgroundImage: `url(${event.img})`,
            backgroundSize: "cover",
          }}
          className="rounded-md w-2/5 h-3 eventImage"
        ></div>
      </div>
      <h1 className="flex justify-center font-bold">{event.eventname}</h1>

      <h2 className="flex justify-center">
        {moment(event.datetime).format("MMMM Do YYYY, h:mm a")}
      </h2>

      <h2 className="flex justify-center">${event.price}</h2>
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
