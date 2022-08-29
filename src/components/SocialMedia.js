/* eslint-disable react/jsx-no-comment-textnodes */
import '../App.css';
const SocialMedia =() =>{
    return <div id="name-social-container">
            <div class="text-center">
                <h1 id="my-name">
                    Javed Ahmed
                </h1>
            </div>
            {/* div for social icons */}
            <div>
                <ul class=" social-icons horizontal-list text-center ">
                    <li>
                        <a href="https://github.com">
                            <img src="media/github.png" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com">
                            <img src="media/linkedin.png" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/">
                            <img src="media/facebook.png" />
                        </a>
                    </li>
                </ul>
            </div>
            {/* <div>
                <ul class="social-icons horizontal-list text-center"> 
                    <li> <a href="https://github.com/javed1225"> <img src="image/github2.png" /> </a> </li>
                    <li> <a href="https://www.linkedin.com/in/javed1225/"> <img src="image/linkedin.png" /> </a> </li>
                   <li> <a href="https://www.facebook.com/javed1225/"> <img src="image/facebook.png" /></a> </li>
                   <li> <a href="#"> <img src="image/stack-overflow.png" /></a> </li> 
                </ul>    
            </div> */}
            <section id="about">
            <div id="my-image">
                <img src="image/me_google_devfest.png" />
            </div>
            <p class="text-center about-text">
                Software Developer, Trainee at Coding Ninjas graduated from Dr. APJ Abdul Kalam,University India. Not a competitive programmer but interested in solving challenging data structures related and algorithmic problems. And I ❤️ React.
            </p>
        </section>
        </div>
}
export default SocialMedia;