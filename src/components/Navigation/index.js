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
  AccentDot,
  DesktopNavbar,
  MobileMenuIcon,
  ContactContent,
  ScrollProgressBar,
  MobileMenuSectionLinks,
} from './styled'

const NAV_SECTIONS = ['work', 'about', 'contact']

const Navigation = ({ setView, view }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled]         = useState(false);
  const progressRef    = useRef(null);
  const activeSectionRef = useRef('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop  = window.scrollY;
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;

      if (progressRef.current) {
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressRef.current.style.width = `${progress}%`;
      }

      setIsScrolled(scrollTop > 20);

      const sections = ['home', 'work', 'about', 'contact'];
      let active = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 80) active = id;
      }
      if (active !== activeSectionRef.current) {
        activeSectionRef.current = active;
        setView(active);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setView]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
        {NAV_SECTIONS.map(el => (
          <a key={el} onClick={() => scrollAndClose(el)}>
            <p>{el}</p>
          </a>
        ))}
        <Contact>
          <ContactContent>
            <a href={contact.emailHref} style={{ color: 'inherit' }}>
              <EmailLink>{contact.email}</EmailLink>
            </a>
            <ContactLink>
              <a href={contact.pdfHref}>{buttons[0].text}</a>
            </ContactLink>
            <ContactLink>
              <a target="_blank" rel="noreferrer" href={buttons[1].href}>{buttons[1].text}</a>
            </ContactLink>
            <ContactLink>
              <a target="_blank" rel="noreferrer" href={buttons[2].href}>{buttons[2].text}</a>
            </ContactLink>
          </ContactContent>
        </Contact>
      </MobileMenuSectionLinks>
    </MobileMenu>
  );

  return (
    <>
      <ScrollProgressBar ref={progressRef} />
      <Container $scrolled={isScrolled} $isHome={view === 'home'}>
        <DesktopNavbar>
          <a
            onClick={() => scrollToSection('home')}
            style={{ textDecoration: 'none', cursor: 'none' }}
          >
            <NavLogo>PG<AccentDot>.</AccentDot></NavLogo>
          </a>
          <NavLinks>
            {NAV_SECTIONS.map(el => (
              <a
                key={el}
                onClick={() => scrollToSection(el)}
                style={{ textDecoration: 'none' }}
              >
                <NavLink $isSelected={view === el}>{el}</NavLink>
              </a>
            ))}
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
