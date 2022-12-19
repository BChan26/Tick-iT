import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"
import { DataContext } from '../DataContext' 



const Venues = () => {
  
  const {venues, setVenues } = useContext(DataContext)

  let navigate = useNavigate()

  let { i } = useParams()

  function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  const showVenue = (venue) => {
    console.log(venue)
    navigate(`${venue.venuename}`)
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
            key={venue.venuename}
            className="card"
          >
            <h3 onClick={() => showVenue(venue)}> {venue.venuename} </h3>
            <h3> {venue.address} </h3>
            <h3>
              {venue.city}, {venue.state}
            </h3>

            <div class="dropdown">
              <button onclick={myFunction} class="dropbtn">Dropdown</button>
              <div id="myDropdown" class="dropdown-content">
                {venue.event.map((event) => (
                      <div key={event.eventname} >{event.eventname}</div>
                ))}
              </div>
            </div>         


            
            <br />
          </div>
        ))}
      </div>
    )
  }
}

export default Venues
