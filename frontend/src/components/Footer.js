import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const quickLinks = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/academics', 'Academics'],
  ['/admissions', 'Admissions'],
  ['/news', 'News'],
  ['/contact', 'Contact'],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-mark" aria-hidden="true">HW</span>
            <span>
              <strong>Himalayan World School</strong>
              <small>Jorpati, Kathmandu</small>
            </span>
          </Link>
          <p>
            A leading school with strong academic programmes, student support, and a modern campus environment. We focus on excellence, integrity, and future-ready learning.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          {quickLinks.map(([to, label]) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h3>Programmes</h3>
          <Link to="/academics/science">Science Programme</Link>
          <Link to="/academics/management">Management Programme</Link>
          <Link to="/academics/law">Law Programme</Link>
          <Link to="/academics/humanities">Humanities Programme</Link>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <p>Jorpati, Gokarneshwor-6, Kathmandu, Nepal</p>
          <p>+977-1-xxxxxxxx</p>
          <p>admissions@himalayanworldschool.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>Copyright {new Date().getFullYear()} Himalayan World School. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
