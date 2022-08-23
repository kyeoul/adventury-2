import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full p-6 flex flex-col md:flex-row md:justify-between items-center text-xl border-b-2 border-blue-200">
        navbar

        <div className="w-full md:w-auto flex flex-row mt-2 md:mt-0 justify-evenly md:justify-start items-center">
            <Router>
              <Link to="/account" className="h-fit"><button className="sub-button">Account</button></Link>
              <Link to="/payment" className="h-fit"><button className="sub-button">Payment</button></Link>
              <Link to="/signup"><button className="sub-button md:signup-button">Sign Up</button></Link>
            </Router>
        </div>
    </div>
  )
}

export default Navbar