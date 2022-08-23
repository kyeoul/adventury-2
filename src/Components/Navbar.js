import React from 'react'

function Navbar() {
  return (
    <div className="w-full p-6 flex flex-col md:flex-row md:justify-between items-center text-xl border-b-2 border-blue-200">
        navbar

        <div className="w-full md:w-auto flex flex-row mt-2 md:mt-0 justify-evenly md:justify-start">
            <button className="sub-button">Account</button>
            <button className="sub-button">Payment</button>
            <button className="sub-button md:signup-button">Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar