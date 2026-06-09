import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  LogoCircle,
  DesktopNavbar,
  MobileMenuIcon,
  ContactContent,
  ScrollProgressBar,
  MobileMenuSectionLinks,
} from './styled'

const NAV_SECTIONS = ['about', 'contact']

const NAME_CHARS = 'Pablo Gastelum'.split('')

const nameContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.02 } },
}

const letterVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 420, damping: 28 },
  },
}

const Navigation = ({ setView, view }) => {
  const [mobileMenuOpen, setMobileMenuOpen]   = useState(false);
  const [isScrolled, setIsScrolled]           = useState(false);
  const [isLogoHovered, setIsLogoHovered]     = useState(false);
  const isHome      = view === 'home';
  const lightBg     = view === 'experience' || view === 'about';
  const showFullName = !isHome || isLogoHovered;
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

      const sections = ['home', 'experience', 'about', 'contact'];
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
      <Container $scrolled={isScrolled} $isHome={isHome} $lightBg={lightBg}>
        <DesktopNavbar>
          <a
            onClick={() => scrollToSection('home')}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            style={{ textDecoration: 'none', cursor: 'none', display: 'flex', alignItems: 'center', minWidth: 16 }}
          >
            <AnimatePresence exitBeforeEnter>
              {!showFullName ? (
                <LogoCircle
                  key="circle"
                  $lightBg={lightBg}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                />
              ) : (
                <NavLogo
                  key="name"
                  $lightBg={lightBg}
                  variants={nameContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                >
                  {NAME_CHARS.map((char, i) => (
                    <motion.span
                      key={i}
                      variants={letterVariants}
                      style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <motion.span
                    variants={letterVariants}
                    style={{ display: 'inline-block', color: '#FF3D2E' }}
                  >.</motion.span>
                </NavLogo>
              )}
            </AnimatePresence>
          </a>
          <NavLinks>
            {NAV_SECTIONS.map(el => (
              <a
                key={el}
                onClick={() => scrollToSection(el)}
                style={{ textDecoration: 'none' }}
              >
                <NavLink $isSelected={view === el} $lightBg={lightBg}>{el}</NavLink>
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
