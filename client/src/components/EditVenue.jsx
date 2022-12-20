import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button, Label, TextInput, ToggleSwitch, Dropdown } from 'flowbite-react'
import Client from '../services/api'

export default function EditVenue ({venue}) {

//Initial value for useState for Editing venue
const venueEdit = {
    id: venue.id,
    venuename: venue.venuename,
    address: venue.address,
    city: venue.city,
    state: venue.state,
    vaccinationrequired: false, 
    img: venue.img,
}

//useState, with editvenue as current state and setEditvenue as func to update state
const [editvenue, setEditvenue] = useState(venueEdit)

    //edit's handleChange w/ text input value updating venueText
    const editHandleChange = (event) => {
        setEditvenue({...editvenue,[event.target.name]: event.target.value})
    }
    
    //edit's handleSubmit to actualize changes
    //runs axios call and updates state
    const editHandleSubmit = (event) => {
    event.preventDefault();
        editvenues(editvenue)
        setEditvenue(editvenue)
        window.location.reload()
    }

    //axios call to update
    const editvenues = async() => {
        const post = await Client.put(`/venues/${venue.id}`, editvenue)
        console.log(post.data)
        setEditvenue(post.data)
    }

    return (
        <div>
            

            <Dropdown>
                <form onSubmit={editHandleSubmit}>
                
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="venuename" value="Venue Name"/>
                    </div>
                    <TextInput name="venuename" onChange={editHandleChange} value={editvenue.venuename} />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="address" value="Address"/>
                    </div>
                    <TextInput name="address" value={editvenue.address} onChange={editHandleChange}/>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="city" value="City"/>
                    </div>
                    <TextInput name="city" value={editvenue.city} onChange={editHandleChange}/>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="state" value="State"/>
                    </div>
                    <TextInput name="state" value={editvenue.state} onChange={editHandleChange}/>
                </div>


                <div className="flex flex-col gap-4">
                    <ToggleSwitch
                        checked={false}
                        label="Vaccination Required"
                        value={editvenue.vaccinationrequired}
                        onChange={editHandleChange}
                        />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="Image" value="Image"/>
                    </div>
                    <TextInput name="img" value={editvenue.img} onChange={editHandleChange}/>
                </div>

                <button className="button-styling" type="submit">
                Edit Venue
                </button>
                </form>
            </Dropdown>
                


        </div>
    )
}