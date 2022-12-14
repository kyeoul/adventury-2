import React from 'react'
import { UserContext } from '../Pages/Home'
import {useNavigate} from "react-router-dom"

function Landing() {

  let navigate = useNavigate();

  return (
    <UserContext.Consumer>
      {
        (account) => {
          return (
            <div className="p-20 flex flex-col items-center center bg-no-repeat bg-cover bg-center text-white">
              <div className="text-5xl xl:text-8xl">
                Are you bored?
              </div>

              <div className="2xl:w-5/12 mt-10 text-xl">
                Discover the hidden gems of your local communities!
                <div>Think travel agency, but convenient, affordable, and local!</div>
              </div>

              <div className="mt-5 sm:mt-10 text-3xl xl:text-5xl">
                Interested?
              </div>

              <button className="mt-10 signup-button text-3xl flex flex-row items-center text-black" 
              onClick={account? () => {navigate("/trips")} : () => {navigate("/signup")}}>
                Get started

                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLineJoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </button>
            </div>
          )
        }
      }
    </UserContext.Consumer>
  )
}

export default Landing