import React from 'react'

function Slides() {
  return (
    <div className="w-full flex flex-col lg:flex-row bg-white box-border bg-origin-border bg-clip-content">
        <div className="flex-0 bg-gradient-to-br from-cyan-500 to-blue-500 w-5/12">

            
        </div>

        <div className="flex-1 pl-8 py-12 text-left">

            <div className="xl:text-4xl text-2xl w-fit">
              Who are we?
            </div>

            <div className="xl:text-xl text-md mt-4 w-11/12 text-justify h-96">
              We love to travel, but as college students, we found it difficult to find adventures that fit into our tight schedules and budgets. So, we combined our love of traveling and computer science to create adventury, a platform that uses advanced algorithms to generate a random and exciting adventure that suits the users needs!
            </div>
            
        </div>
    </div>
  )
}

export default Slides