import { Route, Routes } from "react-router-dom"
import EventList from "./components/EventList"
import EventDetails from "./components/EventDetails"
import Home from "./components/Home"
import "./App.css"
import { useState, useEffect } from "react"
import { DataContext } from "./DataContext"
import Header from "./components/Header"
import Nav from "./components/Nav"
import CreateVenue from './components/CreateVenue'

function App() {
  const [venues, setVenues] = useState([])
  const [user, setUser] = useState("Username")
  const [authenticated, setAuth] = useState(false)
  const [tokens, setTokens] = useState({})

  // will need custom token claim that returns username: https://django-rest-framework-simplejwt.readthedocs.io/en/latest/customizing_token_claims.html
  // const checkToken = async () =>{
  //   // const user = await CheckSession();
  //   console.log(user)
  //   setUser(user)
  //   setAuth(true)
  // }

  useEffect(()=> {
    const token = localStorage.getItem('token')
    console.log(token)
    console.log(user)
    if (token) {
      setUser(localStorage.getItem('user'))
      setAuth(true)
      // checkToken();
    }
  },[])
//Brandon consolidated the code to omit the CheckSession from the backend to simplify and focus on checking the local token and user, line 30 is new


  return (
    <DataContext.Provider
      value={{
        venues,
        setVenues,
        user,
        setUser,
        authenticated,
        setAuth,
        tokens,
        setTokens,
      }}
    >
      <div className="App">
        <header>
          <Header></Header>
          <Nav></Nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/EventList" element={<EventList />} />
            <Route path="/EventDetails/:id" element={<EventDetails />} />
            <Route path="/CreateVenue" element={<CreateVenue/>} />
          </Routes>
        </main>
      </div>
    </DataContext.Provider>
  )
}
export default App
