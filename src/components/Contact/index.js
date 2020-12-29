import React from 'react';
import './index.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactHeader">
        <div>
          <h1>
            Project idea?
          </h1>
          <h1>
            Lets get in touch!
          </h1>
        </div>
        <div>
          <a href="mailto: pablo.g.leyva@gmail.com">
            <h3>pablo.g.leyva@gmail.com</h3>
          </a>
          <div className="btn">
            <h3>
              Get resume
            </h3>
          </div>
        </div>
      </div>
      <div className="contactForm">
        <div>
          <h3>Name</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Email</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Text</h3>
          <textarea rows="4" cols="15"></textarea>
        </div>
        <div className="btn">
          <h3>
            Send message
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;