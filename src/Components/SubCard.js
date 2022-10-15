import React from 'react'

function SubCard(props) {

    function addToCart() {
        // Functionality to add cartItem to cart
    }

  return (
    <div className="bg-white p-6 shadow-md w-1/4 box-border rounded-md">
        
        <div className="text-4xl font-bold">{props.title}</div>

        <div className="mt-3 text-gray-700 h-80 text-ellipsis">
            {props.desc}
        </div>

        <div className="flex flex-row justify-end mt-3">
            <button class="bg-green-700 text-white shadow-md py-3 px-6 rounded-md" onClick={addToCart}>Buy Now</button>
        </div>
    </div>
  )
}

export default SubCard