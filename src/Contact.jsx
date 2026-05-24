import './Contact.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';



export default function Contact() {
  return (
    <section className="contact">
        <div className="contact-container">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-text">Get in touch.</p>
      <div className="social-links">
  <a href="https://github.com/umarahgul" target="_blank" rel="noreferrer">
    <FaGithub />
  </a>
  <a href="https://www.instagram.com/umarahgul/" target="_blank" rel="noreferrer">
    <FaInstagram />
  </a>
  <a href="https://www.linkedin.com/in/umarah-gul-36028a103/" target="_blank" rel="noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://wa.me/923008627784" className="contact-item">
            <FaWhatsapp /> 
          </a>
</div>
      </div>
      
    </section>
    
  );
}