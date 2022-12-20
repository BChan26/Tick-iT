import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import DeleteBtn from './DeleteBtn.jsx'
// import { DataContext } from "../DataContext"
import axios from "axios"

function EventDetails() {
  let { id } = useParams()
console.log(useParams())
  //   const { venues } = useContext(DataContext)
  const [event, setEvent] = useState(null)

  useEffect(() => {
    const getEvent = async () => {
      const response = await axios.get(`http://localhost:8000/events/${id}`)

      setEvent(response.data)
    }
    getEvent()
  }, [])

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
