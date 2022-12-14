import React from 'react'

function Experience() {
  return  <section id="experience" class="top-and-bottom-margin">
  <h1 class="section-heading mb75px">
      <span>
          <img src="media/experience.png" />
      </span>
      <span id="skill-heading">
          Work Experience
      </span>
  </h1>
  <div class="timeline">
      <div class="timeline-box">
          <div class="timeline-box-headings">
              <span>
                  <img src="media/coding_ninjas.png" />
              </span>
              <span>
                  <div class="timeline-box-title">
                      Teaching Assistant
                  </div>
                  <div class="timeline-box-company-name">
                      Coding Ninjas
                  </div>
                  <div class="timeline-box-duration">
                      Jan 2020 - Currently
                  </div>
              </span>
          </div>
          <div class="timeline-box-description">
              Solved 600+ doubts of students pursuing data-science and machine learning course at Coding
              Ninjas. I have also evaluated 10+ projects during this internship.
          </div>
      </div>
      <div class="timeline-box">
          <div class="timeline-box-headings">
              <span>
                  <img src="media/coding_ninjas.png" />
              </span>
              <span>
                  <div class="timeline-box-title">
                      Full Stack Developer Intern
                  </div>
                  <div class="timeline-box-company-name">
                      Coding Ninjas
                  </div>
                  <div class="timeline-box-duration">
                      August 20<sup>th</sup>, 2020 - Currently
                  </div>
              </span>
          </div>
          <div class="timeline-box-description">
              In this internship I am responsible for fixing bugs whether they are on the backend or front
              end, introducing new features, improving UI design e.t.c.
          </div>
      </div>
      
      <div class="timeline-divider">
          <div class="timeline-traveller">
              <img src="media/plane.png" />
          </div>
      </div>
  </div>
</section>
}

export default Experience