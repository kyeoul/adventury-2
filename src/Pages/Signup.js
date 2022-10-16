import React from 'react'
import {Link} from "react-router-dom"
import SignupForm from '../Components/SignupForm'

function Signup(props) {
    return (
        <div className="h-screen w-full bg-gradient-to-br from-yellow-100 to-cyan-200 flex flex-col justify-center items-center">
            
          <div className="md:w-3/6 w-5/6 flex flex-col px-8 py-8 rounded-lg bg-white">
            
            <div className="flex flex-row text-xl">
              Sign Up 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6 ml-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </div>
    
            <div className="mt-4">
              <SignupForm app={props.app}/>
            </div>
    
          </div>
    
          <Link to="/" className="mt-4 hover:text-gray-400 duration-300">
            Back to home
          </Link>
    
        </div>
    )
}

export default Signup