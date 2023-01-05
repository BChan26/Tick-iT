import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { DataContext } from "../DataContext"
import { Dropdown } from "flowbite-react"
import EditVenue from './EditVenue'

const Venues = () => {
  const { venues, setVenues, stickyNav, setHideHeader } = useContext(DataContext)

  let navigate = useNavigate()

  // const showVenue = (venue) => {
  //   console.log(venue)
  //   navigate(`${venue.venuename}`)
  // }

  const showEvent = (event) => {
    console.log(event)
    navigate(`eventdetails/${event.id}`)
  }

  useEffect(() => {
    setHideHeader(false)

    const getVenue = async () => {
      const response = await axios.get("https://murmuring-sands-94431.herokuapp.com/venues/")
      console.log(response.data)
      setVenues(response.data)
    }

    getVenue()
  },[])

  if (!venues) {
    return <h2> Loading Please Wait</h2>
  } else {
    return (
      <div style={{'marginTop': '20px'}} className={"relative" + (stickyNav ? " pt-20" : "")}>
        {venues.map((venue, i) => (
          <div key={venue.venuename} className="card">
            <div className="flex justify-center venueImageCard">
              <div
                style={{
                  backgroundImage: `url(${venue.img})`,
                  backgroundSize: "cover",
                }}
                className="rounded-md w-2/5 h-3 venueImage"
              >
                {/* <img
                className="flex items-center justify-center rounded-md hover:border-2 hover:border-green-400 transition"
                src={venue.img}
                alt=""
                // width="500px"
                // height="=500px"
              /> */}
              </div>
            </div>
            {/* <h3 onClick={() => showVenue(venue)}> {venue.venuename} </h3> */}
            <div className="venueDetails">
              <div className="flex justify-center venueName">
                <h3> {venue.venuename} </h3>
              </div>
              <div className="flex justify-center venueAddress">
                <h3> {venue.address} </h3>
              </div>
              <div className="flex justify-center venueAddress">
                <h3>
                  {venue.city}, {venue.state}
                </h3>
              </div>

              <div className="flex justify-center venueAddress">
                <EditVenue venue={venue}/>
              </div>

            </div>
            <div className="flex justify-center">
              <Dropdown label="Events" dismissOnClick={false}>
                {venue.event.map((event) => (
                  <Dropdown.Item
                    key={event.id}
                    onClick={() => showEvent(event)}
                  >
                    {event.eventname}{" "}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            </div>
            <br />
          </div>
        ))}
      </div>
    )
  }
}

export default Venues
