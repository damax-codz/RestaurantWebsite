import React from 'react'
import './Contact.css'


function Contact() {
  return (
    <div className='container'> 
       <div className='row'>
          <div className='title padd-15'>
            <h2>Contact Us</h2>
          </div>
       </div>
          <h3 className='title padd-15'>Have your Any Questions</h3>
          <h4 className='sub-title padd-15'>WE ARE AT YOUR SERVICES</h4>
          <div className='row'>
            <div className='info-item padd-15'>
              <div className='icon'><i class="fa fa-phone"></i></div>
              <h4> Call Us on</h4>
              <p>+234 905 435 7866</p>
            </div>

            <div className='info-item padd-15'>
              <div className='icon'> <i class="fa fa-envelope-o"></i></div>
              <h4> Email</h4>
              <p>Fida.js@gmail.com</p>
            </div>

            <div className='info-item padd-15'>
              <div className='icon'> <i class="fa fa-address-book"></i></div>
              <h4> Address</h4>
              <p>Portharcourt</p>
            </div>


            <div className='info-item padd-15'>
              <div className='icon'> <i class="fa fa-globe-europe"></i></div>
              <h4>Website</h4>
              <p>Fida.com</p>
            </div>

         </div>


              <h3 className='title padd-15'>SEND US AN EMAIL</h3>
              <h4 className='sub-title padd-15'>WE ARE VERY RESPONSIVE TO MESSAGES</h4>
              <div className='row'>
                <div className='form padd-15'>
                  <div className='row'>
                    <div className='form-item col-6 padd-15'>
                      <div className='form-group'>
                        <input type="text" className='form-control' placeholder='name'></input>
                      </div>
                    </div>
                    <div className='form-item col padd-15'>
                      <div className='form-group'>
                      <input type='email' className='form-control' placeholder='Email'></input>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='form-item col-12 padd-15'>
                      <div className='form-group'>
                        <input type='text' className='form-control' placeholder='Subject'></input>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='form-item col-13 padd-15'>
                      <div className='form-group'>
                        <textarea name='' className='form-control' id='' placeholder='Message'></textarea>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='form-item col-12 padd-15'>
                      <button type='submit' className='btn'>Send Message</button>
                    </div>
                  </div>
                </div>
              </div>

       
   </div>
  )
}

export default Contact