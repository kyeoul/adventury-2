import React from 'react'
import {
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-24 px-6 flex flex-col md:flex-row md:justify-between items-center text-xl bg-transparent">
        navbar

        <div className="w-full md:w-auto flex flex-row mt-2 md:mt-0 justify-evenly md:justify-start items-center">
              <Link to="/login" className="h-fit"><button className="sub-button">Login</button></Link>
              <Link to="/trips" className="h-fit"><button className="sub-button">Trips</button></Link>
              <a href="https://apr5tqlaaiq.typeform.com/to/Gc2p3HLG"><button className="sub-button md:signup-button">Sign Up</button></a>
        </div>
    </div>
  )
}

export default Navbar