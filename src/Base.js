import React, { Component } from 'react';
import './App.css';
import Nav from'./Nav'
import Home from './Home'
import Services from './Services'
import Locations from './Locations'
import Contact from './Contact'
import Footer from './Footer'
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect
} from "react-router-dom"
import {Animated} from "react-animated-css"





const Base = () => {
  return(
    <div>

   <Nav />
   <Home /><br></br>
   <Services className="navback" />
   <Locations/>
   <Contact/>
   <Footer />
   </div>
     )      
          
      
     
} 



export default Base;
