import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import OrderSummary from '../Components/OrderSummary';
import CheckoutInfo from '../Components/CheckoutInfo';
import { useState } from 'react';

function Checkout() {

    const [isSummary, setIsSummary] = useState(true);
    let navigate = useNavigate();
    let location = useLocation();

    const {state} = location;

    function placeOrder(){
        console.log("sup vishal youre looking spicy rn")
    }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
        {isSummary ? <OrderSummary product={state}/> : <CheckoutInfo />}
        <div className="mt-6">
            <button className="" onClick={isSummary ? () => {navigate("/trips")} : () => {setIsSummary(true)}}>Back</button>
            <button className="signup-button ml-6" onClick={isSummary ? () => {setIsSummary(false)} : placeOrder}>{isSummary ? "Checkout" : "Confirm"}</button>
        </div>
    </div>
  )
}

export default Checkout