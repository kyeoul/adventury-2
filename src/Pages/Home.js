import React from 'react'
import Navbar from '../Components/Navbar';
import Landing from '../Components/Landing';
import Slides from '../Components/Slides';
import tempImage from '../res/temp.jpg'
import tempImage2 from '../res/temp2.png'
import HowItWorks from '../Components/HowItWorks';
import Footer from '../Components/Footer';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../App';

export const UserContext = React.createContext();

function Home() {

  const [account, setAccount] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setAccount(user.uid);
      // ...
    } else {
      // User is signed out
      // ...
      setAccount("");
    }
  });

  return (
    <UserContext.Provider value={account}>
      <div className="parallax">

        <section className="parallax-group -z-10">
          <div className="parallax-layer parallax-layer-less -z-10 bg-black">
            <img src={tempImage} className="h-full w-full object-cover opacity-40"></img>
          </div>
          
          <div className="parallax-layer parallax-layer-base -z-10">
            <Navbar/>
            <Landing />
            
          </div>
          
        </section>

        <div className="z-20">
          <Slides />
        </div>

        <section className="parallax-group -z-20">
          <div className="parallax-layer parallax-layer-far -z-10">
            <img src={tempImage2} className="h-[105%] w-[105%] object-cover"></img>
          </div>

          <div className="parallax-layer parallax-layer-base -z-10">
            <HowItWorks />
            <Footer />
          </div>
        </section>

      </div>
    </UserContext.Provider>
  )
}

export default Home