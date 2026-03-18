import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <h2>Get In Touch</h2>
        <div className="contact-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div className="contact-grid">
            <ContactItem icon="fa-envelope" title="Email" link="mailto:huxnain.cs@gmail.com" text="huxnain.cs@gmail.com" />
            <ContactItem icon="fa-github" title="GitHub" link="https://github.com/thehusnain" text="github.com/thehusnain" delay="0.1s" />
            <ContactItem icon="fa-terminal" title="TryHackMe" link="https://tryhackme.com/p/thehusnain" text="tryhackme.com/p/thehusnain" delay="0.2s" />
            <ContactItem icon="fa-linkedin" title="LinkedIn" link="https://linkedin.com/in/husnain-fiaz-7a4761369" text="linkedin.com/in/husnain-fiaz-7a4761369" delay="0.3s" />
            <ContactItem icon="fa-discord" title="Discord" link="#" text="thephantomdelux" delay="0.4s" />
            <ContactItem icon="fa-location-dot" title="Location" link="#" text="Haripur, Pakistan" delay="0.5s" />
          </div>

          <div className="contact-form fade-in">
            <form action="https://formspree.io/f/xojnqqle" method="POST">
              <div className="form-group">
                <label>$ name --input</label>
                <input type="text" name="name" placeholder="your name" required />
                <small className="field-sign">Signed by husnain</small>
              </div>
              <div className="form-group">
                <label>$ email --input</label>
                <input type="email" name="email" placeholder="your email address" required />
              </div>
              <div className="form-group">
                <label>$ message --input</label>
                <textarea name="message" placeholder="Your message here..." required></textarea>
              </div>
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              <button type="submit" className="submit-btn cyber-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, link, text, delay = '0s' }) => {
  const iconClass = ['GitHub', 'LinkedIn', 'Discord'].includes(title) ? 'fab' : 'fas';
  return (
    <div className="contact-item fade-in" style={{ animationDelay: delay }}>
      <div className={`contact-icon ${title.toLowerCase()}`}>
        <i className={`${iconClass} ${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <a href={link} target={link.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
        {text}
      </a>
    </div>
  );
};

export default Contact;
