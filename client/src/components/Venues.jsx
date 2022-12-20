import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"
import { DataContext } from '../DataContext' 
import { Dropdown } from 'flowbite-react'



const Venues = () => {
  const { venues, setVenues } = useContext(DataContext)

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
    const getVenue = async () => {
      const response = await axios.get("http://localhost:8000/venues/")
      console.log(response.data)
      setVenues(response.data)
    }

    getVenue()
  }, [])

  if (!venues) {
    return <h2> Loading Please Wait</h2>
  } else {
    return (
      <div className="flex-wrap: wrap;">
        {venues.map((venue, i) => (
          <div key={venue.venuename} className="card">
            <div classname="venueImage">
              <img
                className="flex items-center justify-center rounded-md hover:border-2 hover:border-green-400 transition"
                src={venue.img}
                alt=""
                width="200px"
                height="200px"
              />
            </div>
            {/* <h3 onClick={() => showVenue(venue)}> {venue.venuename} </h3> */}
            <h3> {venue.venuename} </h3>
            <h3> {venue.address} </h3>
            <h3>
              {venue.city}, {venue.state}
            </h3>

            
                

            <Dropdown label="Events" dismissOnClick={false}>
              {venue.event.map((event) => (
                      <Dropdown.Item key={event.id} onClick={() => showEvent(event)}>{event.eventname} </Dropdown.Item>
              ))}
            </Dropdown>
            
            <br />
          </div>
        ))}
      </div>
    )
  }
}

export default Venues
