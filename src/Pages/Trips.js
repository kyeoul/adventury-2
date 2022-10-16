import React from 'react'
import Navbar from '../Components/Navbar'
import SubCard from '../Components/SubCard'

function Trips() {

  let list_services = [
    {id: 1, title: "One Time", desc: "A payment plan that you pay once for a single trip planned out by us. It will cost $75 per person.", cartItem: "One Time Payment"},
    {id: 2, title: "Monthly", desc: "A subscription plan that you pay once a month for a trip every month. It will cost $55 per person.", cartItem: "Monthly Sub"},
    {id: 3, title: "Yearly", desc: "A subscription plan that you pay once a year for a trip every year. It will cost $45 per person.", cartItem: "Yearly Sub"}
  ]

  return (
    <div className="flex flex-col bg-map-image h-screen bg-cover bg-center bg-no-repeat bg-gray-700 bg-blend-overlay">

        <Navbar/>
        
        <div className="flex flex-row justify-evenly">
          {list_services.map((v, i) => {
            return (
                <SubCard key={i} title={v.title} desc={v.desc} cartItem={v.cartItem}/>
            )
          })}
        </div>
    </div>
  )
}

export default Trips