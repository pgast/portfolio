import { contact } from '../../constants/contact'
import { buttons } from '../../constants/about'

import {
  ContactWrapper,
  ContactContent,
  ContactLabel,
  ContactStatement,
  StatementBlue,
  EmailDisplay,
  LinksList,
  LinkRow,
  LinkIndex,
  LinkName,
  LinkArrow,
} from './styled'

import ScrollableSection from '../section'

const LINKS = [
  { index: '01', label: buttons[0].text, href: contact.pdfHref, external: false },
  { index: '02', label: buttons[1].text, href: buttons[1].href, external: true  },
  { index: '03', label: buttons[2].text, href: buttons[2].href, external: true  },
];

const Contact = () => (
  <ScrollableSection>
    <ContactWrapper>
      <ContactContent>

        <ContactStatement>
          Let's Work <StatementBlue>Together.</StatementBlue>
        </ContactStatement>

        <EmailDisplay href={contact.emailHref}>
          {contact.email}
        </EmailDisplay>

        <LinksList>
          {LINKS.map(({ index, label, href, external }) => (
            <LinkRow
              key={index}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
            >
              <LinkIndex>{index}</LinkIndex>
              <LinkName className="link-name">{label}</LinkName>
              <LinkArrow className="link-arrow">→</LinkArrow>
            </LinkRow>
          ))}
        </LinksList>

      </ContactContent>
    </ContactWrapper>
  </ScrollableSection>
);

export default Contact;
