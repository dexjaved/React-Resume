import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="App" id="body-header">
      <Navbar />
      <SocialMedia />
      <Skill />
      <Experience />
      <Education />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
