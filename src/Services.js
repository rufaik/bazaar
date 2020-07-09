import React from 'react';
import 'tachyons';
import './Services.css'


const Services = () => {
  return (
  	<div>



<div class="serv row ml0 mr0" id="1">
  <div class=" col-sm-4">
    <div class="serv pl6-ns pl0-m pl0-l pl0 pt5 mt4 card">
      <div class=" card-body">
        <img class="card-img-bottom w5" src='./babetran.png' alt="Card image cap"/>

      </div>
    </div>
  </div>
  <div class="= col-sm-8">
    <div class=" serv card">
      <div class=" card-body">
        <h5 class="pt4 f1 tc card-title two fw6">Our Services</h5>
        <div class="pb2 f3 fw6 tc card-title">
          <div> Venue Hire </div>
          <div> Catering Services </div>
          <div> Decorating Services </div>
          <div> Cake baking for all occasions </div>
        </div>
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

