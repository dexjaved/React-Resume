import React from 'react'

function Contact() {
  return  <section id="contact">
  <h1 class="section-heading mb75px">
      <span>
          <img src="media/contact.png" />
      </span>
      <span id="skill-heading">
          Contact
      </span>
  </h1>

  <div class="contact-content">
      <div class="contact-block">
          <form id="contact-form">
              <div>
                  <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div>
                  <input type="text" name="email" placeholder="Your Email" required />
              </div>
              <div>
                  <input type="text" name="message" placeholder="Message" required />
              </div>
              {/* <div style="width:40%;">
                  <button id="send_message">Send Message</button>
              </div> */}
          </form>
      </div>
      <div class="contact-block">
          
          {/* <div>
              <h1 style="font-family: sans-serif;">
                  Contact
              </h1>
          </div> */}
          <div id="my-info">
              <span>
                  <img src="media/location.svg" width="30px" height="30px" />
              </span>
              <span>
                  Delhi India
              </span>
          </div>
          <div id="my-info">
              <span>
                  <img src="media/outlook.png" width="30px" height="30px" />
              </span>
              <span>
                  javed1225@hotmail.com
              </span>
          </div>
          <div id="my-info">
              <span>
                  <img src="media/call.svg" width="30px" height="30px" />
              </span>
              <span>
                  +91-9811047864
              </span>
          </div>
      </div>
  </div>
</section>
}

export default Contact