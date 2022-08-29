import React from 'react'

function Portfolio() {
  return  <section id="portfolio" class="top-and-bottom-margin">
  <h1 class="section-heading mb75px">
      <span>
          <img src="media/portfolio.png" />
      </span>
      <span id="skill-heading">
          Portfolio / Projects
      </span>
  </h1>
  <div class="portfolio-display">
      <div class="project">
          <ul>
              <li>
                  <h1>Front End Web Development</h1>
                  <ol class="front-end">
                      <li><a href="" target="_blank">Music Player (soon)</a></li>
                      <li><a href="https://github.com/javed1225/love-ping-pong-JS" target="_blank"> Love Ping Pong Game </a>
                      </li>
                      <li><a href="https://github.com/javed1225/JS-Calculator" >Calculator</a></li>
                      <li><a href="#">ToDo App (Working)</a></li>
                  </ol>
              </li>
          </ul>
      </div>
      <div class="project">
          <ul>
              <li>
                  <h1>React JS Projects (MERN STACK)</h1>
                  <ol class="back-end">

                      <li><a href="https://github.com/javed1225/cart" target="_blank"> Shopping Cart </a></li>
                      <li><a href="#"  target="_blank">ipod</a></li>

                      <li><a href="#" target="_blank">3 </a></li>
                      <li><a href="#" target="_blank"> 4</a></li>
      
                  </ol>
              </li>
          </ul>
      </div>
      <div class="project">
          <ul>
              <li>
                  <h1>Back End Web Development</h1>
                  <ol class="back-end">
                      <li><a href="#"> 1 </a></li>
                      <li><a href="#"> 2 </a></li>
                      <li><a href="#"> 3 </a></li>
                      <li><a href="#"> 3 </a></li>

                  </ol>
              </li>
          </ul>
      </div>
  </div>

</section> 
}

export default Portfolio