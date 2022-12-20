import Venues from "./Venues"
import Header from "./Header"
import Nav from "./Nav"

export default function Home() {
  return (
    <div id="HomeContent" style={{"width": "100vw"}}>
      <Header></Header>
      <Nav></Nav>
      <Venues></Venues>
    </div>
  )
}
