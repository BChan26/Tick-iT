import { Route, Routes } from "react-router-dom"
import EventList from "./components/EventList"
import EventDetails from "./components/EventDetails"
import Home from "./components/Home"
import "./App.css"
import { useState, useEffect } from "react"
import { DataContext } from "./DataContext"

function App() {
  const [venues, setVenues] = useState([])
  const [user, setUser] = useState('Username')
  const [authenticated, setAuth] = useState(false)
  const [tokens, setTokens] = useState({})

  // will need custom token claim that returns username: https://django-rest-framework-simplejwt.readthedocs.io/en/latest/customizing_token_claims.html
  // const checkToken = async () =>{
  //   const user = await CheckSession();
  //   setUser(user)
  //   setAuth(true)
  // }

  // useEffect(()=> {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     checkToken();
  //   }
  // },[])

  return (
    <DataContext.Provider value={{ venues, setVenues, user, setUser, authenticated, setAuth, tokens, setTokens }}>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/EventList" element={<EventList />} />
            <Route path="/EventDetails/:id" element={<EventDetails />} />
          </Routes>
        </main>
      </div>
    </DataContext.Provider>
  )
}
export default App
