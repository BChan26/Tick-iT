import { Route, Routes } from 'react-router-dom'
import EventList from './components/EventList'
import EventDetails from './components/EventDetails'
import Home from './components/Home'
import './App.css';
import { useState } from 'react'
import { DataContext }from './DataContext'

function App() {

  const [venues, setVenues] = useState([])

  return (

    <DataContext.Provider 
      value ={{venues, setVenues}}>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/EventList" element={<EventList/>} />
            <Route path="/EventDetails" element={<EventDetails/>} />
          </Routes>

        </main>
      </div>
    </DataContext.Provider>
  );
}
export default App;