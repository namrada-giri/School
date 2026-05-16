import React from 'react';
import { Link } from 'react-router-dom';
import './Academics.css';

export default function ManagementProgramme() {
  return (
    <div className="academics-page">
      <section className="academics-hero">
        <div className="container">
          <span className="section-label">Management Programme</span>
          <h1 className="section-title">Business and Leadership Preparation for Grade 11-12</h1>
          <p className="section-subtitle">
            Our management programme combines accounting, economics, and leadership skills for future managers and entrepreneurs.
          </p>
          <Link to="/academics" className="btn-ghost">Back to Academics</Link>
        </div>
      </section>

      <section className="section">
        <div className="container stream-list">
          <article className="stream-card">
            <span className="stream-number">01</span>
            <div>
              <h2>Core learning</h2>
              <strong>Accounting, Economics, Business Studies</strong>
            </div>
            <p>
              Build a strong foundation for business management, finance, and entrepreneurship.
            </p>
          </article>
          <article className="stream-card">
            <span className="stream-number">02</span>
            <div>
              <h2>Skill development</h2>
              <strong>Communication, critical thinking, teamwork</strong>
            </div>
            <p>
              Emphasis on case studies, presentations, and real-world management scenarios.
            </p>
          </article>
          <article className="stream-card">
            <span className="stream-number">03</span>
            <div>
              <h2>Future opportunities</h2>
              <strong>Commerce, business studies, marketing, and administration</strong>
            </div>
            <p>
              Ideal for students pursuing BBA, BBS, BBM, CA foundation, and corporate careers.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
