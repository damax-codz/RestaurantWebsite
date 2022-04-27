import React from 'react'
import './Contact.css'


function Contact() {
  return (
    <div className='contain'> 
       <div className='row'>
          <div className='title padd-15'>
          </div>
       </div>
          <h3 className='title padd-15'>Have you Any Questions?</h3>
          <h4 className='sub-title padd-15'>WE ARE AT YOUR SERVICES</h4>
          <div className='row'>
            <div className='info-item padd-15'>
              <div className='icon'></div>
              <h4> Call Us on</h4>
              <p>+234 905 435 7866</p>
            </div>

            <div className='info-item padd-15'>
              <div className='icon'> </div>
              <h4> Email</h4>
              <p>Fida.js@gmail.com</p>
            </div>

            <div className='info-item padd-15'>
              <div className='icon'> </div>
              <h4> Address</h4>
              <p>Portharcourt</p>
            </div>


            <div className='info-item padd-15'>
              <div className='icon'> </div>
              <h4>Website</h4>
              <p>Fida.com</p>
            </div>

         </div>


              <h3 className='title padd-15'>SEND US AN EMAIL</h3>
              <h4 className='sub-title padd-15'>WE ARE VERY RESPONSIVE TO MESSAGES</h4>
              {/* <div className='row'>
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
              </div> */}
              <div className='form'>
                
                <input type='text' placeholder='name'></input>
                <input type='email' placeholder='email'></input>
                <input type='tel' placeholder='phone'></input>
                <textarea type='text' placeholder='message' rows='8' cols='65' ></textarea>
                <button >Send message</button>
              </div>

       
   </div>
  )
}

export default Contact