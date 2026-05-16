import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const links = [
  {
    to: '/admissions',
    label: 'Admission',
    sub: [
      { label: 'Admission Procedure', to: '/admissions#procedure' },
      { label: 'Online Registration', to: '/admissions#registration' },
      { label: 'Fees Structure', to: '/admissions#fees' },
    ],
  },
  {
    to: '/academics',
    label: 'Academics',
    sub: [
      { label: 'Science Programme', to: '/academics/science' },
      { label: 'Management Programme', to: '/academics/management' },
      { label: 'Law Programme', to: '/academics/law' },
      { label: 'Humanities Programme', to: '/academics/humanities' },
    ],
  },
  { to: '/news', label: 'Career', sub: [{ label: 'Work Culture', to: '/news' }, { label: 'Training Session', to: '/news' }, { label: 'Vacancies', to: '/news' }] },
  { to: '/about', label: 'About Us', sub: [] },
];

const ThemeIcon = ({ isDark }) => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    {isDark ? (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
      </>
    ) : (
      <path d="M21 13.5A8.5 8.5 0 1 1 10.5 3a6.5 6.5 0 0 0 10.5 10.5Z" />
    )}
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-top">
        <div className="container nav-top-inner">
          <a href="tel:+919557291888">Contact Number</a>
        </div>
      </div>
      <nav className="container nav-container" aria-label="Primary navigation">
        <Link to="/" className="nav-logo" aria-label="Himalayan World School home">
          <img className="logo" src="/logo.png" alt="Himalayan World School Logo" />
          <span className="logo-copy">
            <strong>Himalayan</strong>
            <small>World School</small>
          </span>
        </Link>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.label}>
              <Link className={location.pathname === link.to ? 'active' : ''} to={link.to}>
                {link.label}
              </Link>
              {link.sub.length > 0 && (
                <div className="nav-dropdown">
                  {link.sub.map((item) => (
                    <Link key={item.label} to={item.to}>{item.label}</Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Link to="/admissions" className="btn-primary nav-cta">Enquire Now</Link>
          <button
            className={`hamburger ${mobileOpen ? 'open' : ''}`}
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          {links.map((link) => (
            <Link key={link.label} className={location.pathname === link.to ? 'active' : ''} to={link.to}>
              {link.label}
            </Link>
          ))}
          <Link to="/admissions" className="btn-primary">Enquire Now</Link>
        </div>
      )}
    </header>
  );
}
