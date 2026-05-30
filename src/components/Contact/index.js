import { contact } from '../../constants/contact'
import { buttons } from '../../constants/about'

import {
  Container,
  LeftPanel,
  SectionLabel,
  PanelTitle,
  ContactEmailButton,
} from '../About/styled'

import {
  ContactRight,
  GetInTouchLabel,
  EmailDisplay,
  SignalRule,
  LinksList,
  LinkRow,
  LinkLeft,
  LinkIndex,
  LinkName,
  LinkArrow,
} from './styled'

import ScrollableSection from '../section'

const LINKS = [
  { index: '01', label: buttons[0].text, href: contact.pdfHref,  external: false },
  { index: '02', label: buttons[1].text, href: buttons[1].href,  external: true  },
  { index: '03', label: buttons[2].text, href: buttons[2].href,  external: true  },
];

const Contact = () => (
  <ScrollableSection>
    <Container>

      <LeftPanel>
        <SectionLabel>04 — Contact</SectionLabel>
        <PanelTitle>Let's<br />Work<br />Together</PanelTitle>
        <ContactEmailButton href={contact.emailHref}>
          {contact.emailBtnText}
        </ContactEmailButton>
      </LeftPanel>

      <ContactRight>
        <GetInTouchLabel>get in touch</GetInTouchLabel>
        <EmailDisplay href={contact.emailHref}>
          {contact.email}
        </EmailDisplay>

        <SignalRule />

        <LinksList>
          {LINKS.map(({ index, label, href, external }) => (
            <LinkRow
              key={index}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              whileHover={{ paddingLeft: '14px' }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <LinkLeft>
                <LinkIndex>{index}</LinkIndex>
                <LinkName>{label}</LinkName>
              </LinkLeft>
              <LinkArrow>↗</LinkArrow>
            </LinkRow>
          ))}
        </LinksList>
      </ContactRight>

    </Container>
  </ScrollableSection>
);

export default Contact;
