import React from 'react';
import { Link } from 'react-router-dom';
import './Academics.css';

export default function LawProgramme() {
  return (
    <div className="academics-page">
      <section className="academics-hero">
        <div className="container">
          <span className="section-label">Law Programme</span>
          <h1 className="section-title">Foundations in Law and Governance for Grade 11-12</h1>
          <p className="section-subtitle">
            This programme introduces legal studies, political science, and governance concepts for students interested in law and public service.
          </p>
          <Link to="/academics" className="btn-ghost">Back to Academics</Link>
        </div>
      </section>

      <section className="section">
        <div className="container stream-list">
          <article className="stream-card">
            <span className="stream-number">01</span>
            <div>
              <h2>Programme focus</h2>
              <strong>Legal concepts, governance, and social studies</strong>
            </div>
            <p>
              Study the fundamentals of law, rights, ethics, and public administration.
            </p>
          </article>
          <article className="stream-card">
            <span className="stream-number">02</span>
            <div>
              <h2>Learning methods</h2>
              <strong>Debates, case discussions, and civic projects</strong>
            </div>
            <p>
              Develop critical thinking through class discussions, mock debates, and legal reasoning.
            </p>
          </article>
          <article className="stream-card">
            <span className="stream-number">03</span>
            <div>
              <h2>Career directions</h2>
              <strong>Law, public administration, policy, journalism, and advocacy</strong>
            </div>
            <p>
              Prepare for careers in law, governance, social work, and civil services.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
