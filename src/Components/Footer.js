import React, { useState } from 'react'

function Footer() {

    const [input, setInput] = useState('');

    function changeInputHandler(event){
        setInput(event.target.value)
    }

    return (
        <div className="bg-gray-700 mt-16 p-8 w-full flex flex-col justify-center items-center text-white">

            <div className="flex flex-row justify-around items-center w-2/6">
                Privacy Policy
                <div className="dot"/>
                FAQ
                <div className="dot"/>
                Help
                <div className="dot"/>
                Terms & Conditions
            </div>

            <div className="mt-8 text-xl">
                Contact Us:
            </div>

            <div className="text-black mt-8">
                <textarea type="text" value={input} onChange={changeInputHandler} className="w-96 h-24"></textarea>
            </div>
        
        </div>
    )
}

export default Footer