import React, { Component } from 'react';
import './App.css';
import Nav from'./Nav'
import Home from './Home'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import Base from './Base'
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect
} from "react-router-dom"
import {Animated} from "react-animated-css"





const App = () => {
  return(
    <div>
        <BrowserRouter>
  <Switch>
  
      <Route path ={"/Home"} component={Base} />
      <Route exact path ={"/"} component={Base} />
      

    

    
     </Switch>
 

</BrowserRouter>
  
   </div>
     )      
          
      
     
} 



export default App;
