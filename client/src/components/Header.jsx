import { useEffect, useState, useContext } from "react"
import { Carousel } from "flowbite-react"
import { HiTicket } from "react-icons/hi2"
import axios from "axios"
import { DataContext } from "../DataContext"
import moment from "moment"

export default function Header() {

  const { hideHeader } = useContext(DataContext)
  
  const [ events, setEvents ] = useState()
  
  useEffect(() => {
    
    const getEvent = async () => {
      const response = await axios.get(`https://murmuring-sands-94431.herokuapp.com/events/`)
      const shuffled = response.data.sort(() => 0.5 - Math.random()).slice(0,3)
      setEvents(shuffled)
    }
    getEvent()
  }, [])

    return (
      <div id='stickySib' className={hideHeader ? 'hidden' : ''}>
        <div className="flex justify-center items-center h-96 bg-gradient-to-r from-indigo-500 to-slate-400 w-full">
          <div className="w-3/5 rounded h-56 sm:h-64 xl:h-80 2xl:h-80">
            {events ? 
              <Carousel slideInterval={6000}>
                <div>
                  <div className="flex justify-center mx-8 px-8 text-6xl" >
                    <HiTicket className="mr-6 text-indigo-300"/><div className="font-bold font-poppins">Tick-It</div>
                  </div>
                  <div className="flex justify-center text-xl mt-2">
                    - Miss It or Tick-It
                  </div>
                </div>
                {events.map(event => (
                  <div className="w-[99%] h-full rounded-lg p-6 flex flex-col justify-end" key={event.id} style={{ 'backgroundImage': `url(${event.img})`, 'backgroundSize': "cover", }}>
                    <div className="text-indigo-100 text-2xl font-bold">{event.eventname}</div>
                    <div className="text-indigo-100 text-xl font-semibold">{moment(event.datetime).format("MMM Do YY")}</div>
                  </div>
                ))}
              </Carousel>
            : null }
          </div>
        </div>
      </div>
    )
  
}
