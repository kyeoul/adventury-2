import React from 'react'
import {
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-24 px-6 flex flex-col md:flex-row md:justify-between items-center text-xl bg-transparent">
        navbar

        <div className="w-full md:w-auto flex flex-row mt-2 md:mt-0 justify-evenly md:justify-start items-center">
              <Link to="/account" className="h-fit"><button className="sub-button">Account</button></Link>
              <Link to="/trips" className="h-fit"><button className="sub-button">Trips</button></Link>
              <Link to="/signup"><button className="sub-button md:signup-button">Sign Up</button></Link>
        </div>
    </div>
  )
}

export default Navbar