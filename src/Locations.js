import React from 'react';
import 'tachyons';
import './Services.css'


const Locations = () => {
  return (
  	<div className=" tc">



<div class="loca row" id="5">
  <div class=" col-sm-12">
    <div class=" loca  card">
      <div class=" card-body">
        <h5 class="pt5 f1 tc card-title two fw6">Our Locations</h5>
      </div>
    </div>
  </div>
</div>
<div class="loca row" id="1">
  <div class=" col-sm-4">
    <div class=" loca tc mt3 pb5 card">
      <div class=" card-body">
        <img id="3"class="card-img-bottom w5" src='./dbaztran.png' alt="D's Bazaar"/>
        <h5 class=" card-text">38 Siaka Stevens Street,<br></br>Freetown, Sierra Leone</h5>

      </div>
    </div>
  </div>
    <div class=" col-sm-4">
    <div class=" loca tc mt3 card">
      <div class=" card-body">
        <img id="3"class="card-img-bottom w5" src='./dbaztran.png' alt="D's Bazaar"/>
        <h5 class=" card-text">10 Wilkinson Road,<br></br>Freetown, Sierra Leone</h5>

      </div>
    </div>
  </div>
  <div class="= col-sm-4">
    <div class=" loca tc mt3 card">
      <div class=" card-body">
        <img id="3"class="card-img-bottom w5" src='./dbaztran.png' alt="D's Bazaar"/>
        <h5 class=" card-text">12 Blackhall Road,<br></br>Freetown, Sierra Leone</h5>

      </div>
    </div>
  </div>
</div>

 </div>
  )
}

export default Locations;

