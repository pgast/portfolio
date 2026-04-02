import React, { useState, useEffect, useRef } from 'react';

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
  ContactButton,
  DesktopNavbar,
  MobileMenuIcon,
  ContactContent,
  ScrollProgressBar,
  MobileMenuSectionLinks,
} from './styled'


const Navigation = ({ setView, view, setDrawerOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const progressRef = useRef(null);
  const activeSectionRef = useRef('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Update progress bar directly — no re-render on every frame
      if (progressRef.current) {
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressRef.current.style.width = `${progress}%`;
      }

      // Nav border appears once user scrolls past the hero
      setIsScrolled(scrollTop > 20);

      // Active section: last section whose top edge is at or above 80px from viewport top
      const sections = ['home', 'work', 'about'];
      let active = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 80) {
          active = id;
        }
      }
      if (active !== activeSectionRef.current) {
        activeSectionRef.current = active;
        setView(active);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // sync state on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setView]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollAndClose = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  if (mobileMenuOpen) return (
    <MobileMenu>
      <MobileMenuIcon
        className="fas fa-times"
        onClick={() => setMobileMenuOpen(false)}
      />
      <MobileMenuSectionLinks>
        {['work', 'about'].map(el => (
          <a
            key={el}
            onClick={() => scrollAndClose(el)}
            style={{ textDecoration: 'none' }}
          >
            <p>{el}</p>
          </a>
        ))}
        <Contact>
          <p>contact</p>
          <ContactContent>
            <a href={contact.emailHref} style={{ color: 'inherit' }}>
              <EmailLink>{contact.email}</EmailLink>
            </a>
            <ContactLink>
              <a href={contact.pdfHref}>
                <h3>{buttons[0].text}</h3>
              </a>
              <i className="fas fa-regular fa-download" />
            </ContactLink>
            <ContactLink>
              <a target="_blank" rel="noreferrer" href={buttons[1].href}>
                <h3>{buttons[1].text}</h3>
              </a>
            </ContactLink>
            <ContactLink>
              <a target="_blank" rel="noreferrer" href={buttons[2].href}>
                <h3>{buttons[2].text}</h3>
              </a>
            </ContactLink>
          </ContactContent>
        </Contact>
      </MobileMenuSectionLinks>
    </MobileMenu>
  );

  return (
    <>
      <ScrollProgressBar ref={progressRef} />
      <Container $scrolled={isScrolled}>
        <DesktopNavbar>
          <a
            onClick={() => scrollToSection('home')}
            style={{ textDecoration: 'none', cursor: 'none' }}
          >
            <NavLogo>pg</NavLogo>
          </a>
          <NavLinks>
            {['work', 'about'].map(el => (
              <a
                key={el}
                onClick={() => scrollToSection(el)}
                style={{ textDecoration: 'none' }}
              >
                <NavLink $isSelected={view === el}>{el}</NavLink>
              </a>
            ))}
            <ContactButton onClick={() => setDrawerOpen(true)}>
              contact
            </ContactButton>
          </NavLinks>
        </DesktopNavbar>
        <MobileMenuIcon
          className={`fas fa-${mobileMenuOpen ? 'times' : 'bars'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </Container>
    </>
  );
};

export default Navigation;
