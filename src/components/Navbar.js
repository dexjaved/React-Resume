/* eslint-disable jsx-a11y/anchor-is-valid */
import '../App.css';

const Navbar =() => {
    return (
        <div className="body-header">
            <nav>
            <ul class="horizontal-list text-center nav-menu">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>


        </div>
    )
};

export default Navbar;