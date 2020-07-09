import React from 'react';
import './Contact.css';
import ZapierForm from 'react-zapier-form'




const Contact = () => {
	return (
		<div className="fix">
		
		 <div className="conback">

				<ZapierForm  action='https://hooks.zapier.com/hooks/catch/5717228/o3ntgre/'>
   {({ error, loading, success }) => {
      return (
         <div>
            {!success && !loading &&
               <div>
               <article id="4" className="conback br3 cardsz center" >
<main className="pa4 pb0 conback black-80 newform w-75 w-50-ns">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		    <legend className=" two f1 fw6 pt5 ph0 mh0">Contact Us</legend>
               		<div className="mt1">
               		<label className=" fw6 lh-copy f4" for="name">Name</label>
               	 <input className="pa2 conback input-reset ba bg-transparent hover-bg-black hover-pink w-100" type='text' name='Name' id="name" />
               	 </div>
                  <div className="mt2">
		        <label className="db fw6 lh-copy f4" for="email-address">Email</label>
		        <input className="pa2 conback input-reset ba bg-transparent hover-bg-black hover-blue w-100" type="email" name="Email"  id="name"/>
		      </div>
                  <div className="mv2">
		        <label className="db fw6 lh-copy f4" for="number">Contact Number</label>
		        <input className="b conback pa2 input-reset ba bg-transparent hover-bg-black hover-green w-100" type="number" name="Contact"  id="number"/>
		      </div>
                  <div className="mv2">
		        <label className="db fw6 lh-copy f4" for="text">Message</label>
		        <textarea rows="4" className="b conback pa4 input-reset ba bg-transparent hover-bg-grey hover-blue w-100 " type="text" name="Message"  id="number"></textarea>
		      </div>
		      </fieldset>
                  <button
                  className="b conback ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mb6" 
                  >Submit</button>
                  </main>
                  </article>
               </div>
            }
            {loading && <div>Loading...</div>}
            {error && <div>Something went wrong. Please try again later.</div>}
            {success && <div>

            	<article className="br3 bg-white w-100 w-50-m w-25-l  center">
					<main className=" black-80">
		  				<form className="conback">
		    				<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		     					 <legend className="f1 two pt3 fw6 ph0 mh0">Thank You!</legend>
		     					 <a class="nav-link return conback underline fw6" href="/Home">return</a>
		     				</fieldset>
		     			</form>
					</main>
				</article>
		</div>}
         </div>
      )
   }}
</ZapierForm>

	</div>
				</div>
			);
}

export default Contact;