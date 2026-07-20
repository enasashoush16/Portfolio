import { useEffect, useState } from 'react';
import { faBars, faCode, faFileLines, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import FaIcon from '../common/FaIcon.jsx';

const navItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['Projects', '/projects'],
  ['Experience', '/experience'],
  ['Education', '/education'],
  ['Skills', '/skills'],
  ['Contact', '/contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  return (
    <header className="navbar" style={{ '--scroll-progress': `${progress}%` }}>
      <div className="container nav-inner">
        <NavLink className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <FaIcon icon={faCode} size={22} />
          </span>
          <span className="gradient-text">&lt; Enas Ashoush /&gt;</span>
        </NavLink>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary navigation">
          {navItems.map(([label, path]) => (
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              end={path === '/'}
              key={path}
              onClick={() => setOpen(false)}
              to={path}
            >
              {label}
            </NavLink>
          ))}
          <a
            className="btn btn-secondary"
            href="/Files/Enas_Ashoush.pdf"
            download
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <FaIcon icon={faFileLines} size={18} />
            Resume
          </a>
        </nav>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="mobile-toggle"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <FaIcon icon={faXmark} size={22} /> : <FaIcon icon={faBars} size={22} />}
        </button>
      </div>
      <span className="scroll-progress" />
    </header>
  );
}
