import React from 'react';
import 'tachyons';
import './Services.css'


const Services = () => {
  return (
  	<div className=" tl">



<div class="serv row" id="1">
  <div class=" col-sm-4">
    <div class=" serv pl6 pt5 mt4 card">
      <div class=" card-body">
        <img class="card-img-bottom w5" src='./babetran.png' alt="Card image cap"/>

      </div>
    </div>
  </div>
  <div class="= col-sm-8">
    <div class=" serv card">
      <div class=" card-body">
        <h5 class="pt4 f1 tc card-title two fw6">Our Services</h5>
        <ul class="pb2 f3 fw5 tc card-title">
          <li> Venue Hire </li>
          <li> Catering Services </li>
          <li> Decorating Services </li>
          <li> Cake baking for all occasions </li>
        </ul>
        <h5 class="pb4 f3 tc card-title">Whether social distancing, self-isolating, working from home, or simply want delicious food delivered straight to your door - WE HAVE YOU COVERED!
          <br></br><br></br>Call us on: <br></br>+232 77 248 759</h5>

      </div>
    </div>
  </div>
</div>

 </div>
  )
}

export default Services;

