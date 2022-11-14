import React, { useState } from 'react';
import {
  contact,
  messageStatuses
} from '../../constants/contact'

import {
  Container,
  Form,
  Header,
  HeaderTitle,
  ErrorMessage,
  HeaderButton,
  FormButton,
} from './styled'

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
    <Container>
      <Header>
        <div>
          {contact.headers.map(header => <HeaderTitle>{header}</HeaderTitle>)}
        </div>
        <div>
          <a href={contact.pdfHref}>
            <HeaderButton>
              <h3>{contact.resumeTitle}</h3>
            </HeaderButton>
          </a>
        </div>
      </Header>

      <Form>
        {(sentMessage && !errorMessage) && (
          <>
            {messageStatuses.sent.map(text => <h3>{text}</h3>)}
          </>
        )}
        {(sentMessage && errorMessage) && (
          <ErrorMessage>
            {messageStatuses.error.map(text => <h3>{text}</h3>)}
          </ErrorMessage>
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
            <FormButton onClick={(e) => handleSubmit(e)}>
              <h3>
                Send message
              </h3>
            </FormButton>
          </>
        )}
      </Form>
    </Container>
  );
};

export default Contact;