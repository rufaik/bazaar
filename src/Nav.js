import React from 'react';
import './App.css';
import './Me.css'
import './Home.css'
import './Complete.css'
import 'tachyons';
import {Animated} from "react-animated-css"
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';

const Nav = () => {
  return (
  
  <nav class="navbar navbar-expand-lg navbar-light bg-white bb frontfont b--red shadow-5">
<a class="navbar-brand" href="/Home"><img  alt="D's Bazaar"
                    src='./JDBAZ.png' className ='w5'/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link  fw6" href="#1">SERVICES</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link  fw6" href="#5">LOCATIONS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link fw6" href="#2">OPENING TIMES</a>
      </li>
    </ul>
    <form class="form-inline vanalign my-2 my-lg-0">
      <a href="#4" className=" ">
        <img  alt='DBAZZAR' src='./van.png' className ='w3'/>
        <img  alt='DBAZZAR' src='./gap.png' className ='w1'/>
      </a>
        <button type="button" class="bun fw6 btn btn-primary btn-lg">BOOK NOW</button>
    </form>

  </div>
</nav>
   
  )
}

export default Nav;


