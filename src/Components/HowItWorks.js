import React from 'react'
import Stock from '../res/stock.jpg'

function HowItWorks() {
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
                    Culpa ut Lorem esse do aute magna nisi. Incididunt mollit cillum incididunt deserunt. Sit deserunt enim ipsum cupidatat esse anim fugiat quis dolore ut qui.
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
                    Culpa ut Lorem esse do aute magna nisi. Incididunt mollit cillum incididunt deserunt. Sit deserunt enim ipsum cupidatat esse anim fugiat quis dolore ut qui.
                </div>
            </div>
        </div>

        <button className="mt-10 mr-auto w-fit signup-button text-3xl flex flex-row items-center text-black">
        Get started

            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
      </button>
    </div>
  )
}

export default HowItWorks