import React from 'react'

function Education() {
  return   <section id="education" className="top-and-bottom-margin">
  <h1 className="section-heading mb75px">
      <span>
          <img src="media/education.png" />
      </span>
      <span id="skill-heading">
          Education
      </span>
  </h1>
  <div className="timeline">
      <div className="timeline-box">
          <div className="timeline-box-headings">
              <span>
                  <img src="media/coding_ninjas.png" />
              </span>
              <span>
                  <div className="timeline-box-title">
                      Full Stack Web Development With Node JS and React JS
                  </div>
                  <div className="timeline-box-company-name">
                      Coding Ninjas
                  </div>
                  <div className="timeline-box-duration">
                     Aug 2021 - Present
                  </div>
              </span>
          </div>
          <div className="timeline-box-description">
              As a part of this training program, I Studied the concepts of full stack web development, which
              includes Front end web development as well as back end web development. I also studied React JS,
              Redux
              in depth in this training program and found it really fascinating how React uses state as its
              root to manipulate most of the DOM Structure. After this course, MERN Stack Web Development
              became my main strength.
          </div>
      </div>
      <div className="timeline-box">
          <div className="timeline-box-headings">
              <span>
                  <img src="media/coding_ninjas.png" />
              </span>
              <span>
                  <div className="timeline-box-title">
                      DS and Algos. in JAVA
                  </div>
                  <div className="timeline-box-company-name">
                      Coding Ninjas
                  </div>
                  <div className="timeline-box-duration">
                      May 2020 - Aug 2020
                  </div>
              </span>
          </div>
          <div className="timeline-box-description">
              Studied the basics of JAVA, got familiar with OOPS in JAVA, and various important searching and
              sorting algorithms, Recursion, Basics of Pointers, Dynamic Programming, Arrays, Time and Space
              Complexity, Linked Lists, Stacks, Queues, Trees, BSTs, BTs, Hashmaps,
              Priority Queues, Graphs, Tries and Huffman Coding.
          </div>
      </div>
      <div className="timeline-box">
          <div className="timeline-box-headings">
              <span>
                  <img src="image/apj_logo.png" />
              </span>
              <span>
                  <div className="timeline-box-title">
                      B.Tech -Computer Engg.
                  </div>
                  {/* <div className="timeline-box-company-name" style="color:rgb(126, 40, 39)">
                      Dr A.P.J Abdul Kalam University
                  </div> */}
                  <div className="timeline-box-duration">
                      Aug 2016 - Aug 2020
                  </div>
              </span>
          </div>
          {/* <div className="timeline-box-description">
             <span style="color: rgb(126, 40, 39);"> Main coursework: </span> Data Structures, Design and analysis of Algorithms, Computer Architecture, Artificial Intelligence, Database Systems, Operating Systems, Software Engineering.
          </div> */}
      </div>
      
      

      
      
      <div className="timeline-divider">
          <div className="timeline-traveller">
              <img src="media/tractor.png" width="64px" height="64px" />
          </div>
      </div>
  </div>
</section>

}

export default Education