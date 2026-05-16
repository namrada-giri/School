import React from 'react';
import { Link } from 'react-router-dom';
import './Academics.css';

export default function ScienceProgramme() {
  return (
    <div className="academics-page">
      <section className="academics-hero">
        <div className="container">
          <span className="section-label">Science Programme</span>
          <h1 className="section-title">High-Impact Science Education for Grades 11-12</h1>
          <p className="section-subtitle">
            Himalayan World School offers a powerful science programme designed for aspiring doctors, engineers, researchers, and technology leaders.
          </p>
          <Link to="/academics" className="btn-ghost">Back to Academics</Link>
        </div>
      </section>

      <section className="section">
        <div className="container stream-list">
          <article className="stream-card">
            <span className="stream-number">01</span>
            <div>
              <h2>What you study</h2>
              <strong>Physics, Chemistry, Biology, Mathematics</strong>
            </div>
            <p>
              Deep subject mastery with lab-based learning, concept clarity, and problem-solving practice.
            </p>
          </article>
          <article className="stream-card">
            <span className="stream-number">02</span>
            <div>
              <h2>Learning approach</h2>
              <strong>Hands-on labs and science projects</strong>
            </div>
            <p>
              Students learn through experiments, research activities, workshops, and guided revision sessions.
            </p>
          </article>
          <article className="stream-card">
            <span className="stream-number">03</span>
            <div>
              <h2>Career pathways</h2>
              <strong>Medicine, engineering, IT, research, and design</strong>
            </div>
            <p>
              The programme prepares learners for higher studies, competitive entrance exams, and STEM careers.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
