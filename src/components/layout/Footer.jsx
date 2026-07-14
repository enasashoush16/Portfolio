import { faAnglesRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { profile, socialLinks } from '../../data/profile.js';
import FaIcon from '../common/FaIcon.jsx';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Projects', '/projects'],
  ['Experience', '/experience'],
  ['Education', '/education'],
  ['Skills', '/skills'],
  ['Contact', '/contact'],
];

export default function Footer() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h2 className="gradient-text">&lt; Enas Ashoush /&gt;</h2>
            <p>{profile.intro} Thank you for visiting my personal portfolio website.</p>
            <div className="social-row">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a className="icon-link" href={href} key={label} aria-label={label} target="_blank" rel="noreferrer">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3>Navigation</h3>
            <nav className="footer-links" aria-label="Footer navigation">
              {links.map(([label, href]) => (
                <NavLink key={href} to={href}>
                  <FaIcon icon={faAnglesRight} size={14} className="footer-link-arrow" aria-hidden="true" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
          <div>
            <h3>Get in Touch</h3>
            <p>Email Me</p>
            <a className="contact-link " href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            {/* <p >Call Me</p>
            <a className="contact-link" href="tel:+201150895891">
              {profile.phone}
            </a> */}
          </div>
        </div>
        <div className="footer-bottom">
          <span>Designed & Built by Enas Ashoush © 2026 All rights reserved</span>
          <button
            className={`back-top${scrolled ? ' back-top--visible' : ''}`}
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <FaIcon icon={faArrowUp} size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
