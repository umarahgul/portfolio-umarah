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
  <a href="https://github.com" target="_blank" rel="noreferrer">
    <FaGithub />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <FaInstagram />
  </a>
  <a href="your-linkedin-link" target="_blank" rel="noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://wa.me+923008627784" className="contact-item">
            <FaWhatsapp /> 
          </a>
</div>
      </div>
      
    </section>
    
  );
}