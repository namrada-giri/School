import React from 'react';
import { Link } from 'react-router-dom';
import './Academics.css';

export default function HumanitiesProgramme() {
  return (
    <div className="academics-page">
      <section className="academics-hero">
        <div className="container">
          <span className="section-label">Humanities Programme</span>
          <h1 className="section-title">Humanities and Social Sciences for Grade 11-12</h1>
          <p className="section-subtitle">
            Our humanities programme explores society, culture, communication, and critical thinking for students who value creative and social learning.
          </p>
          <Link to="/academics" className="btn-ghost">Back to Academics</Link>
        </div>
      </section>

      <section className="section">
        <div className="container stream-list">
          <article className="stream-card">
            <span className="stream-number">01</span>
            <div>
              <h2>Programme subjects</h2>
              <strong>Political Science, Sociology, Psychology, Economics</strong>
            </div>
            <p>
              Learn about society, culture, human behavior, and communication through inquiry-based study.
            </p>
          </article>
          <article className="stream-card">
            <span className="stream-number">02</span>
            <div>
              <h2>Learning focus</h2>
              <strong>Critical thinking, writing, and research</strong>
            </div>
            <p>
              Students engage in discussions, projects, and analytical writing to develop strong reasoning and communication skills.
            </p>
          </article>
          <article className="stream-card">
            <span className="stream-number">03</span>
            <div>
              <h2>Future paths</h2>
              <strong>Journalism, media, law, education, social sciences</strong>
            </div>
            <p>
              This programme prepares learners for careers in communication, teaching, policy, research, and public service.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
