import { contact } from '../../constants/contact'

import {
  Container,
  HeaderTitle,
  ContactButton,
  EmailButton,
  ContactBtnsContainer,
  MobileContainer,
} from './styled'

export const Contact = () => (
  <Container>
    <div>
      {contact.headers.map(header => <HeaderTitle>{header}</HeaderTitle>)}
    </div>
    <ContactBtnsContainer>
      <a href={contact.emailHref}>
        <EmailButton color="green">
          <h3>{contact.emailBtnText}</h3>
        </EmailButton>
      </a>
      <a href={contact.pdfHref}>
        <ContactButton>
          <h3>{contact.resumeTitle}</h3>
        </ContactButton>
      </a>
    </ContactBtnsContainer>
  </Container>
);

export const MobileContact = ({ show, goToMobileMenuMain }) => (
  <MobileContainer show={show}>
    Mobile Contact
    <button onClick={goToMobileMenuMain}>back</button>
  </MobileContainer>
)
