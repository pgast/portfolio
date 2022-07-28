import React, { useState } from 'react';
import './index.css';
import {
  contact,
  messageStatuses
} from '../../constants/contact'

const Contact = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ sentMessage, setSentMessage ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState(false);
  const validForm = (name && email && message) !== '' ? true : false;

  const handleSubmit = (event) => {
    if(validForm) {
      const templateId = 'template_tbr3zii';
      const serviceId = 'service_5r0kymp';
      sendFeedback(serviceId, templateId, {message, name, email})
    }
  }
  
  const sendFeedback = (serviceId, templateId, variables) => {
    window.emailjs.send(serviceId, templateId, variables).then(res => {
      setSentMessage(true);
    })
    .catch(err => setErrorMessage(false));
  }

  return (
    <div className="contact">
      <div className="contactHeader">
        <div>
          {contact.headers.map(header => <h3>{header}</h3>)}
        </div>
        <div>
          <a href={contact.pdfHref}>
            <div className="btn">
              <h3>{contact.resumeTitle}</h3>
            </div>
          </a>
        </div>
      </div>
      <div className="contactForm">
        {(sentMessage && !errorMessage) && (
          <>
            {messageStatuses.sent.map(text => <h3>{text}</h3>)}
          </>
        )}
        {(sentMessage && errorMessage) && (
          <div id="errorMessage">
            {messageStatuses.error.map(text => <h3>{text}</h3>)}
          </div>
        )}
        {(!sentMessage && !errorMessage) && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;