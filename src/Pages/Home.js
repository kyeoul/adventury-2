import React from 'react'
import Navbar from '../Components/Navbar';
import Landing from '../Components/Landing';
import Slides from '../Components/Slides';
import tempImage from '../res/temp.jpg'
import tempImage2 from '../res/temp2.png'
import HowItWorks from '../Components/HowItWorks';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="parallax">

      <section className="parallax-group -z-10">
        <div className="parallax-layer parallax-layer-less -z-10 bg-black">
          <img src={tempImage} className="h-full w-full object-cover opacity-40"></img>
        </div>
        
        <div className="parallax-layer parallax-layer-base -z-10">
          <Navbar />
          <Landing />
          
        </div>
        
      </section>

      <div className="z-20">
        <Slides />
      </div>

      <section className="parallax-group -z-20">
        <div className="parallax-layer parallax-layer-far -z-10">
          <img src={tempImage2} className="h-full w-full object-cover"></img>
        </div>

        <div className="parallax-layer parallax-layer-base -z-10">
          <HowItWorks />
          <Footer />
        </div>
      </section>

    </div>
  )
}

export default Home