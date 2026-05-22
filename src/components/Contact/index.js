import { contact } from '../../constants/contact'

import {
  Container,
  LeftPanel,
  RightPanel,
  SectionLabel,
  PanelTitle,
  ContactEmailButton,
} from '../About/styled'

import ScrollableSection from '../section'

const Contact = () => (
  <ScrollableSection>
    <Container>
      <LeftPanel>
        <SectionLabel>contact</SectionLabel>
        <PanelTitle>{contact.title}</PanelTitle>
        <ContactEmailButton href={contact.emailHref}>
          {contact.emailBtnText}
        </ContactEmailButton>
      </LeftPanel>
      <RightPanel style={{ minHeight: 'calc(100vh - 70px)' }} />
    </Container>
  </ScrollableSection>
);

export default Contact;
