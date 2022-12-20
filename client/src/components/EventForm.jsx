import { useState } from "react"
import axios from "axios"

export default function EventForm({venueId}) {
  const [formData, setFormData] = useState({
    venue: venueId,
    eventname: '',
    datetime: '',
    price: 0,
    details: '',
    img: '',
  })
  
  return (
    <div>
      <form>

      </form>
    </div>  
  )
}