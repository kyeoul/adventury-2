import React from 'react'
import {
  Link
} from "react-router-dom";
import {UserContext} from "../Pages/Home"


function Navbar(props) {

  return (
    <UserContext.Consumer>

        {
          (account) => {
            return (

              <div className="w-full h-24 px-6 flex flex-col md:flex-row md:justify-between items-center text-xl bg-transparent">
                navbar

                <div className="w-full md:w-auto flex flex-row mt-2 md:mt-0 justify-evenly md:justify-start items-center">
                      {
                        !account
                        ? <Link to="/login" className="h-fit"><button className="sub-button">Login</button></Link>
                        : <Link to="/account" className="h-fit"><button className="sub-button">Account</button></Link>
                      }
                      <Link to={!account ? "/login" : "trips"} className="h-fit"><button className="sub-button">Trips</button></Link>
                      {
                        !account
                        ? <a href="https://apr5tqlaaiq.typeform.com/to/Gc2p3HLG"><button className="sub-button md:signup-button">Sign Up</button></a>
                        : <Link to="/faq" clasName="h-fit"><button className="sub-button">FAQ</button></Link>
                      }
                </div>
              </div>
            )
          }
        }

    </UserContext.Consumer>
  )
}

export default Navbar