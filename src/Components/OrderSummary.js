import React from 'react'

function OrderSummary(props) {
  return (
    <div className="w-2/3 flex flex-col items-start p-10 border-2 rounded-2xl">
      <div className="font-extrabold text-2xl">Order Summary</div>

      <div className="mt-3">Adventury Pack: {props.product}</div>

      <div className='mt-3 text-gray-600 text-start w-full'>
        <div className="fee-label">Cost: <span>soemthing</span></div>
        <div className="fee-label">Fees: <span>we need money</span></div>
        <div className="fee-label">Taxes: <span>i dont believe in taxes unfortunately</span></div>
      </div>

      <div className="w-full border-t-2 mt-3"></div>

      <div className="fee-label font-extrabold text-2xl text-cyan-600 mt-3">Total: <span>Nice</span></div>
    </div>
  )
}

export default OrderSummary