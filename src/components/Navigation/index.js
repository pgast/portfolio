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
  MobileMenuIcon,
} from './styled'

const Navigation = ({ setView, view, setDrawerOpen }) => {
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

      <MobileMenu $isVisible={mobileMenuOpen}>
        <MobileMenuSectionLinks $isVisible={view !== 'contact'}>
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
          <p onClick={() => setView('contact')}>contact</p> 
        </MobileMenuSectionLinks>
      </MobileMenu>
    </Container>
  );
};

export default Navigation;