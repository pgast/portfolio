import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  DesktopNavbar,
  NavLogo,
  NavLinks,
  NavLink,
  MobileMenu,
  MobileMenuSectionLinks,
  MobileMenuContactLinks,
  MobileMenuIcon,
  ContactIcon,
  LinkedInIcon,
} from './styled'

const Navigation = ({ setView, view, labelId }) => {
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);
  const setMobileView = (view) => {
    setView(view);
    setMobileMenuOpen(false);
  };

  // TODO Separate render for mobile menu and desktop

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
          {['work', 'about', 'contact'].map(el => (
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
        </NavLinks>
      </DesktopNavbar>

      <MobileMenuIcon 
        className={`fas fa-${mobileMenuOpen ? "times" : "bars"}`}
        onClick={() => setMobileMenuOpen(mobileMenuOpen ? false : true)}
      />

      <MobileMenu $isVisible={mobileMenuOpen}>
        <MobileMenuSectionLinks>
          {['work', 'about', 'contact'].map(el => (
            <Link 
              key={el}
              to={`/${el}`} 
              onClick={() => setMobileView(el)} 
              style={{ textDecoration: "none" }} 
            >
              <p>{el}</p>
            </Link>
          ))}   
        </MobileMenuSectionLinks>
        <MobileMenuContactLinks>
          <a 
            target="_blank" 
            rel="noreferrer"
            href="https://www.linkedin.com/in/pablogastelum" 
          >
            <LinkedInIcon className="fab fa-linkedin" />
          </a>
          <a href="mailto: pablo.g.leyva@gmail.com">
            <ContactIcon className="fas fa-envelope" />
          </a>
        </MobileMenuContactLinks>
      </MobileMenu>
    </Container>
  );
};

export default Navigation;