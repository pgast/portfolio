import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import resumeLink from '../../assets/Pablo-Gastelum-Resume.pdf';
import './index.css';

const Contact = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');

  const handleSubmit = (event) => {
    const templateId = 'template_tbr3zii';
    const serviceId = 'service_5r0kymp';
    sendFeedback(serviceId, templateId, {message, name, email})
  }
  
  const sendFeedback = (serviceId, templateId, variables) => {
    window.emailjs.send(serviceId, templateId, variables).then(res => {
      console.log('Email successfully sent!')
    })
    .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  return (
    <div className="contact">
      <div className="contactHeader">
        <div>
          <h3>
            Project or work inquiries?
          </h3>
          <h3>
            Let's get in touch!
          </h3>
        </div>
        <div>
          <a href="mailto: pablo.g.leyva@gmail.com">
            <p>pablo.g.leyva@gmail.com</p>
          </a>
          <Link 
            to={resumeLink} 
            target="_blank"
            download
            style={{ textDecoration: "none", color: "black" }} 
          >
            <div className="btn">
              <h3>Get resume</h3>
            </div>
          </Link>
        </div>
      </div>
      <div className="contactForm">
        <div>
          <p>Name</p>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <p>Email</p>
          <input 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p>Message</p>
          <textarea 
            rows="4" 
            cols="15"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          >
          </textarea>
        </div>
        <div className="btn" onClick={(e) => handleSubmit(e)}>
          <h3>
            Send message
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;