import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"

const Venues = () => {
  const [venues, setVenues] = useState([])
  let navigate = useNavigate()

  let { i } = useParams()

  const showVenue = (venue, i) => {
    console.log(venue)
    navigate(`${venue.name}`)
  }

  useEffect(() => {
    const getVenue = async () => {
      const response = await axios.get("http://localhost:8000/venues/")
      console.log(response.data)
      setVenues(response.data)
    }

    getVenue()
  }, [])

  //   return (
  //     <div>
  //       <h1>Hello World! From the Venues page</h1>
  //     </div>
  //   )
  // }

  if (!venues) {
    return <h2> Loading Please Wait</h2>
  } else {
    return (
      <div className="grid">
        {venues.map((venue, i) => (
          <div
            key={venue.name}
            className="card"
            onClick={() => showVenue(venue, i)}
          >
            <h3> {venue.venuename} </h3>
            <h3> {venue.address} </h3>
            <h3>
              {venue.city}, {venue.state}
            </h3>
            {venue.event.map((event) => (
              <div>{event.eventname}</div>
            ))}
            <br />
          </div>
        ))}
      </div>
    )
  }
}

export default Venues
