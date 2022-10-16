import React from 'react'
import { UserContext } from '../Pages/Home'
import Stock from '../res/stock.jpg'
import {useNavigate} from "react-router-dom"

function HowItWorks() {

    let navigate = useNavigate();

  return (
    <UserContext.Consumer>
        {
            (account) => {
                return (
                    <div className="w-full flex flex-col items-center justify-center mt-16">
                        <div className="text-xl font-bold text-white">
                            How It Works:
                        </div>

                        <div className="w-full flex flex-row items-center justify-evenly mt-12">
                            <div id='step1' className="w-96">
                                <div id="image" className="works-picture">
                                    <img src={Stock}/>
                                </div>

                                <div className="works-label">
                                    Simply provide us with your preferences, such as your favorite types of activities, budget, distance, and availabilty!
                                </div>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-24 h-24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>

                            <div id='step2' className="w-96">
                                <div id="image" className="works-picture">
                                    <img src={Stock}/>
                                </div>


                                <div className="works-label">
                                    We curate a list of activities for a perfect adventure, suited to your needs!
                                </div>
                            </div>
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

export default HowItWorks