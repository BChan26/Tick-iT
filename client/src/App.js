import { Route, Routes } from 'react-router-dom'
import EventList from './components/EventList'
import EventDetails from './components/EventDetails'
import Home from './components/Home'
import './App.css';

function App() {

  return (
    <div className="App">
    <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/EventList" element={<EventList/>} />
          <Route path="/EventDetails" element={<EventDetails/>} />
        </Routes>

      </main>
    </div>
  );
}
export default App;