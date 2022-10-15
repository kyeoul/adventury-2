import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import OrderSummary from '../Components/OrderSummary';

function Checkout() {

    let navigate = useNavigate();
    let location = useLocation();

    const {state} = location;

    function placeOrder(){
        console.log("sup vishal youre looking spicy rn")
        switch(state){
            case "One Time Payment":
                console.log("nice");
                window.location.href = "https://square.link/u/ZM1jSViS";
                break;
            case "Monthly Sub":
                console.log("Nicer");
                window.location.href = "https://square.link/u/HKRCC1S6";
                break;
            case "Yearly Sub":
                console.log("Nicest");
                window.location.href = "https://square.link/u/Mx7n32vT";
                break;
        }
    }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
        <OrderSummary product={state}/>
        <div className="mt-6">
            <button className="" onClick={() => {navigate("/trips")}}>Back</button>
            <button className="signup-button ml-6" onClick={placeOrder}>Checkout</button>
        </div>
    </div>
  )
}

export default Checkout