import React from 'react'
import Navbar from '../Components/Navbar'
import SubCard from '../Components/SubCard'

function Trips() {

  let list_services = [
    {id: 1, title: "Weekly", desc: "Description", cartItem: "Weekly Sub"},
    {id: 2, title: "Monthly", desc: "Description 2", cartItem: "Monthly Sub"},
    {id: 3, title: "Yearly", desc: "Description 3", cartItem: "Yearly Sub"}
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