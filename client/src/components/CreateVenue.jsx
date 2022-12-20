import { useState } from "react"
import axios from "axios"
import { Button, Label, TextInput, ToggleSwitch } from 'flowbite-react'
import Client from '../services/api'

export default function VenueForm({}) {

const [formData, setFormData] = useState({
    venuename: '',
    address: '',
    city: '',
    state: '',
    vaccinationrequired: false, 
    img: '',
})

const handleLoginForm = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}

const handleLogin = async (e) => {
    try {
        const response = await Client.post(`/venues/`, formData)
        return response.data
    } catch (error) {
        throw error 
    }
}

return (
    <div>


<form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="venuename" value="venuename"/>
            </div>
            <TextInput id="venuename" type="venuename" placeholder="venuename" name="venuename" value={formData.venuename} required={true} onChange={handleLoginForm}/>
        </div>

        <div>
            <div className="mb-2 block">
                <Label htmlFor="address" value="address"/>
            </div>
            <TextInput id="address" type="address" placeholder="address" name="address" value={formData.address} required={true} onChange={handleLoginForm}/>
        </div>

        <div>
            <div className="mb-2 block">
                <Label htmlFor="city" value="city"/>
            </div>
            <TextInput id="city" type="city" placeholder="city" name="city" value={formData.city} required={true} onChange={handleLoginForm}/>
        </div>

        <div>
            <div className="mb-2 block">
                <Label htmlFor="state" value="state"/>
            </div>
            <TextInput id="state" type="state" placeholder="state" name="state" value={formData.state} required={true} onChange={handleLoginForm}/>
        </div>


        <div className="flex flex-col gap-4">
            <ToggleSwitch
                checked={false}
                label="Vaccination Required"
                value={formData.vaccinationrequired}
                onChange={handleLoginForm}
                />
        </div>

        <div>
            <div className="mb-2 block">
                <Label htmlFor="Image" value="Image"/>
            </div>
            <TextInput id="img" type="img" placeholder="img" name="img" value={formData.img} required={false} onChange={handleLoginForm}/>
        </div>

        <Button type="submit">
            Submit
        </Button>
        </form>


    </div>  
)
}