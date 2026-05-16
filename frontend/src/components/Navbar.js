import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  {
    to: '/news',
    label: 'Career',
    sub: [
      { label: 'Work Culture', to: '/news' },
      { label: 'Training Session', to: '/news' },
      { label: 'Vacancies', to: '/news' },
    ],
  },
  { to: '/about', label: 'About Us', sub: [] },
];

const PHONE = '+919557291888';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenAccordion(null);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close the menu on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleAccordion = (label) => {
    setOpenAccordion((prev) => (prev === label ? null : label));
  };

  const isActive = (to) => location.pathname === to;

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'menu-open' : ''}`}>
      {/* ─── Top utility bar ─── */}
      <div className="nav-top">
        <div className="container nav-top-inner">
          <span className="nav-top-tag">Admissions Open 2082</span>
          <a className="nav-top-phone" href={`tel:${PHONE}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 015.02 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
            +91 95572 91888
          </a>
        </div>
      </div>

      {/* ─── Main nav ─── */}
      <nav className="container nav-container" aria-label="Primary navigation">
        <Link to="/" className="nav-logo" aria-label="Himalayan World School home">
          <img className="logo" src="/logo.png" alt="Himalayan World School Logo" />
          <span className="logo-copy">
            <strong>Himalayan</strong>
            <small>World School</small>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.label} className={link.sub.length > 0 ? 'has-dropdown' : ''}>
              <Link
                className={isActive(link.to) ? 'active' : ''}
                to={link.to}
              >
                {link.label}
                {link.sub.length > 0 && (
                  <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </Link>
              {link.sub.length > 0 && (
                <div className="nav-dropdown" role="menu">
                  {link.sub.map((item) => (
                    <Link key={item.label} to={item.to} role="menuitem">
                      <span className="dropdown-dot" aria-hidden="true" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Link to="/admissions" className="btn-primary nav-cta">Enquire Now</Link>

          {/* Hamburger */}
          <button
            className={`hamburger ${mobileOpen ? 'open' : ''}`}
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="bar bar-1" />
            <span className="bar bar-2" />
            <span className="bar bar-3" />
          </button>
        </div>
      </nav>

      {/* ─── Mobile / Tablet drawer ─── */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-head">
            <span className="mobile-menu-eyebrow">Menu</span>
          </div>

          <nav className="mobile-nav" aria-label="Mobile navigation">
            {links.map((link) => (
              <div key={link.label} className="mobile-nav-item">
                {link.sub.length > 0 ? (
                  <>
                    <button
                      className={`mobile-nav-trigger ${openAccordion === link.label ? 'expanded' : ''} ${isActive(link.to) ? 'active' : ''}`}
                      onClick={() => toggleAccordion(link.label)}
                      aria-expanded={openAccordion === link.label}
                    >
                      <span>{link.label}</span>
                      <svg className="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <div className={`mobile-subnav ${openAccordion === link.label ? 'mobile-subnav--open' : ''}`}>
                      <div className="mobile-subnav-track">
                        <Link
                          to={link.to}
                          className="mobile-subnav-overview"
                          onClick={() => setMobileOpen(false)}
                        >
                          View all {link.label}
                        </Link>
                        {link.sub.map((item) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            className="mobile-subnav-link"
                            onClick={() => setMobileOpen(false)}
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                              <path d="M9 18l6-6-6-6" />
                            </svg>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className={`mobile-nav-link ${isActive(link.to) ? 'active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA lives inside the hamburger drawer */}
          <div className="mobile-menu-footer">
            <Link
              to="/admissions"
              className="btn-primary mobile-cta"
              onClick={() => setMobileOpen(false)}
            >
              Enquire Now
            </Link>
            <a href={`tel:${PHONE}`} className="mobile-phone-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 015.02 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
              Call us — +91 95572 91888
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`mobile-backdrop ${mobileOpen ? 'mobile-backdrop--visible' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
}