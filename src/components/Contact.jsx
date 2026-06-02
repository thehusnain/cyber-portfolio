import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <h2>Get In Touch</h2>

        <div className="contact-grid-layout">

          {/* Contact Info Pane — slides in from left */}
          <div className="contact-info-pane contact-pane-enter-left">
            <h3>Contact Information</h3>
            <p className="contact-pane-desc">
              Feel free to reach out for research collaboration, job opportunities,
              or ethical security inquiries.
            </p>

            <div className="contact-list">
              <ContactItem
                icon="fa-envelope"
                title="Email"
                link="mailto:contact@husnain.rocks"
                text="contact@husnain.rocks"
              />
              <ContactItem
                icon="fa-github"
                title="GitHub"
                link="https://github.com/thehusnain"
                text="github.com/thehusnain"
              />
              <ContactItem
                icon="fa-linkedin"
                title="LinkedIn"
                link="https://linkedin.com/in/husnain-fiaz-7a4761369"
                text="linkedin.com/in/husnain-fiaz"
              />
              <ContactItem
                icon="fa-terminal"
                title="TryHackMe"
                link="https://tryhackme.com/p/thehusnain"
                text="tryhackme.com/p/thehusnain"
              />
            </div>
          </div>

          {/* Contact Form Pane — slides in from right */}
          <div className="contact-form-pane contact-pane-enter-right">
            <form action="https://formspree.io/f/xojnqqle" method="POST">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="form-name">Name</label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-email">Email Address</label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '1.25rem' }}>
                <label htmlFor="form-message">Message</label>
                <textarea
                  id="form-message"
                  name="message"
                  rows="5"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>

              {/* Honeypot spam trap */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <div className="form-submit-row">
                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, link, text }) => {
  const isBrandIcon = ['GitHub', 'LinkedIn'].includes(title);
  const iconClass = isBrandIcon ? 'fab' : 'fas';

  return (
    <div className="contact-detail-item">
      <div className="contact-detail-icon">
        <i className={`${iconClass} ${icon}`}></i>
      </div>
      <div className="contact-detail-content">
        <span className="contact-detail-label">{title}</span>
        {link === '#' ? (
          <span className="contact-detail-value">{text}</span>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="contact-detail-value"
          >
            {text}
          </a>
        )}
      </div>
    </div>
  );
};

export default Contact;
