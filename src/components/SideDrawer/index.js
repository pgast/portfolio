import React from 'react'

import { contact } from '../../constants/contact'
import { buttons } from '../../constants/about'
import { 
  SideDrawerContainer,
  Title,
  Links,
  ContactEmail,
  CloseButton,
  Content,
  CloseIcon,
  LinkButton
} from './styled'

const SideDrawer = ({ show, closeSideDrawer }) => {
  return (
    <SideDrawerContainer show={show}>
      <Content>
        <CloseButton onClick={closeSideDrawer}>
          <CloseIcon className="fas fa-times" />
        </CloseButton>
        <Title>
          {contact.title}
        </Title>
        <a 
          href={contact.emailHref} 
          style={{ color: 'inherit' }}
        >
          <ContactEmail>
            {contact.email}
          </ContactEmail>
        </a>
        <Links>
          <LinkButton>
            <a href={contact.pdfHref}>
              <h3>{buttons[0].text}</h3>
            </a>
            <i className="fas fa-regular fa-download" />
          </LinkButton>
          <LinkButton>
            <a 
              target="_blank" 
              rel="noreferrer"
              href={buttons[1].href}
            >
              <h3>{buttons[1].text}</h3>
            </a>
          </LinkButton>
          <LinkButton>
            <a 
              target="_blank" 
              rel="noreferrer"
              href={buttons[2].href}
            >
              <h3>{buttons[2].text}</h3>
            </a>
          </LinkButton>
        </Links>
      </Content>
    </SideDrawerContainer>
  )   
}

export default SideDrawer;
