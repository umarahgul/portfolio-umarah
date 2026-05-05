import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./index.css";
import "./App.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="global-footer">
      <p>&copy; {currentYear} Umarah Gul. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
   <div className="app-wrapper">
      {/* Background Ambient Orbs */}
      <div className="blob-1"></div>
      <div className="blob-2"></div>
      <div className="content-layer">
        
         <Hero />
        
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </div>
    </div>
  );
}

export default App;