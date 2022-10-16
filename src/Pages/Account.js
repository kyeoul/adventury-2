import React from 'react'
import Navbar from '../Components/Navbar'
import { UserContext } from './Home'

// TODO: Combine account with original home page. Do the same for trips. Both have similar structures, so separate pages
// may not be needed. I'm too tired to do it atm though
function Account() {
  return (
    <UserContext.Provider value="something">
      <div className="w-full h-screen bg-account-image bg-cover bg-gray-700 bg-blend-overlay flex flex-col">
        <Navbar/>

        <div className='flex-1 flex justify-center items-center'>
          <div className='bg-white w-3/4 box-border p-8 rounded-lg flex flex-col items-start'>
            <div className='font-bold text-2xl'>Account Details:</div>

            <div className='mt-3'>Name: Gen Eric</div>
            <div className='mt-3'>Email: generic4@gmail.com</div>
            <div className='mt-3'>Phone Number: 123-456-7890</div>
            <div className='mt-3'>Location: Chicago, IL</div>
            <div className='mt-3'>Current Subscription: One Time</div>
            <div className='mt-3'>Next Billing Cycle: None</div>
            <div className='mt-3'>Password: ********</div>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default Account