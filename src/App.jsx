import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./index.css"

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
    <div>
         <Hero />
        
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;