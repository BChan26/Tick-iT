import Login from "./Login"
import { HiTicket } from "react-icons/hi2"
import { Link, NavLink } from 'react-router-dom'
import { useState, useContext } from 'react'
import { DataContext } from "../DataContext"

export default function Nav() {

  const { stickyNav } = useContext(DataContext)

  const [ navStatus, setNavStatus ] = useState({
    homeActive: true,
    venueActive: false,
    eventsActive: false,
    createActive: false,
    dark: false
  })

  const clearNav = {
    homeActive: false,
    venueActive: false,
    eventsActive: false,
    createActive: false,
  }

  const toggleNav = (linkStatus) => {
    setNavStatus(() => {
      let navTemp = {...navStatus, ...clearNav}
      navTemp = {...navTemp, [linkStatus]: true}
      return navTemp
    })
  }
  
  return (
    <nav id="stickyNav" 
      className={"w-screen bg-indigo-100 px-2 sm:px-4 py-2.5 dark:bg-gray-900 h-30"
      + (stickyNav ? " fixed top-0 z-50" : "")}
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to='/' className="flex items-center">
          <HiTicket size="40px" className="text-indigo-500" />
          <span className="self-center ml-3 text-xl font-semibold whitespace-nowrap dark:text-white">
            Tick-It
          </span>
        </Link>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-0"
          id="mobile-menu-2"
          >
          <ul className="flex flex-col p-4 mt-4 text-base md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium">
              <NavLink to='/'
                className={
                  'block py-2 pl-3 pr-4 box-border border-b-[3px] hover:text-indigo-500 hover:border-indigo-500 md:p-0'
                  + (navStatus.homeActive ? ' border-indigo-500 text-indigo-500' : ' border-transparent text-gray-800')}
                onClick={() => toggleNav('homeActive')}
              >
                Home
              </NavLink>
              <Link to='/'
                className={
                  'block py-2 pl-3 pr-4 box-border border-b-[3px] hover:text-indigo-500 hover:border-indigo-500 md:p-0'
                  + (navStatus.venueActive ? ' border-indigo-500 text-indigo-500' : ' border-transparent text-gray-800')}
                onClick={() => toggleNav('venueActive')}
              >
                Venues
              </Link>
              <Link to='/'
                className={
                  'block py-2 pl-3 pr-4 box-border border-b-[3px] hover:text-indigo-500 hover:border-indigo-500 md:p-0'
                  + (navStatus.eventsActive ? ' border-indigo-500 text-indigo-500' : ' border-transparent text-gray-800')}
                onClick={() => toggleNav('eventsActive')}
              >
                Events
              </Link>
              <Link to='/CreateVenue'
                className={
                  'block py-2 pl-3 pr-4 box-border border-b-[3px] hover:text-indigo-500 hover:border-indigo-500 md:p-0'
                  + (navStatus.createActive ? ' border-indigo-500 text-indigo-500' : ' border-transparent text-gray-800')}
                onClick={() => toggleNav('createActive')}
              >
                Create
              </Link>
          </ul>
        </div>
        <Login />
      </div>
    </nav>
  )
}
