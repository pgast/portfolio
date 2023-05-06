import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { buttons } from '../../constants/about'
import { contact } from '../../constants/contact'

import {
  NavLogo,
  NavLink,
  Contact,
  NavLinks,
  Container,
  EmailLink,
  MobileMenu,
  ContactLink,
  DesktopNavbar,
  MobileMenuIcon,
  ContactContent,
  MobileMenuSectionLinks,
} from './styled'

const Navigation = ({ setView, view, setDrawerOpen }) => {
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);
  const setMobileView = (view) => {
    setView(view);
    setMobileMenuOpen(false);
  };

  if (mobileMenuOpen) return (
    <MobileMenu>
      <MobileMenuIcon 
        className={`fas fa-times`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <MobileMenuSectionLinks>
        {['work', 'about'].map(el => (
          <Link 
            key={el}
            to={`/${el}`} 
            onClick={() => setMobileView(el)} 
            style={{ textDecoration: "none" }} 
          >
            <p>{el}</p>
          </Link>
        ))}  
        <Contact>
          <p>
            contact
          </p>
          <ContactContent>
            <a 
              href={contact.emailHref} 
              style={{ color: 'inherit' }}
            >
              <EmailLink>
                {contact.email}
              </EmailLink>
            </a>
            <ContactLink>
              <a href={contact.pdfHref}>
                <h3>{buttons[0].text}</h3>
              </a>
              <i className="fas fa-regular fa-download" />
            </ContactLink>
            <ContactLink>
              <a 
                target="_blank" 
                rel="noreferrer"
                href={buttons[1].href}
              >
                <h3>{buttons[1].text}</h3>
              </a>
            </ContactLink>
            <ContactLink>
              <a 
                target="_blank" 
                rel="noreferrer"
                href={buttons[2].href}
              >
                <h3>{buttons[2].text}</h3>
              </a>
            </ContactLink>
          </ContactContent>
        </Contact> 
      </MobileMenuSectionLinks>
    </MobileMenu>
  )

  return (
    <Container>
      <DesktopNavbar>
        <Link 
          to='/' 
          onClick={() => setView(null)}
          style={{ textDecoration: "none", color: "black" }} 
        >
          <NavLogo>
            pg
          </NavLogo>
        </Link>
        <NavLinks>
          {['work', 'about'].map(el => (
            <Link 
              key={el}
              to={`/${el}`} 
              onClick={() => setView(el)} 
              style={{ textDecoration: "none" }} 
            >
              <NavLink $isSelected={view === el}>
                {el}
              </NavLink>
            </Link>
          ))}
          <NavLink onClick={() => setDrawerOpen(true)}>contact</NavLink>
        </NavLinks>
      </DesktopNavbar>
      <MobileMenuIcon 
        className={`fas fa-${mobileMenuOpen ? "times" : "bars"}`}
        onClick={() => setMobileMenuOpen(mobileMenuOpen ? false : true)}
      />
    </Container>
  );
};

export default Navigation;