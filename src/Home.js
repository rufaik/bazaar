import React from 'react';
import './App.css';
import './Me.css'
import './Home.css'
import './Complete.css'
import 'tachyons';
import { Fade } from 'react-slideshow-image';
import Nav from './Nav'
import Contact from './Contact'


  const fadeImages = [
  './booked.svg',
  './inspec.svg',
  './team.svg'
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const Home = () => {
  return (
  	<div>
    
   <br></br>



 

    <div className="slide-container ml7 mt5 mt4-ns" >
      <Fade {...fadeProperties}>
        <div className="each-fade">
       
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
          
        </div>
        <div className="each-fade">
    
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
         
        </div>
        <div className="each-fade">
      
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
          
        </div>
      </Fade>

    </div>

    
    </div>
  )
}











export default Home;
