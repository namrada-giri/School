import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Academics.css';

const streams = [
  {
    id: 'science',
    title: 'Science Programme',
    grades: 'Grades 11-12 (NEB)',
    detail: 'Develop scientific knowledge through Physics, Chemistry, Biology, and Mathematics. Ideal for students aspiring to careers in medicine, engineering, IT, and research.',
  },
  {
    id: 'management',
    title: 'Management Programme',
    grades: 'Grades 11-12 (NEB)',
    detail: 'Build business foundation with Accounting, Economics, and Management studies. Ideal for students interested in business administration, banking, and entrepreneurship.',
  },
  {
    id: 'law',
    title: 'Law Programme',
    grades: 'Grades 11-12 (NEB)',
    detail: 'Introduce legal concepts through Social Studies, Political Science, and Legal Studies. Prepare for careers in law, public administration, and political science.',
  },
  {
    id: 'humanities',
    title: 'Humanities Programme',
    grades: 'Grades 11-12 (NEB)',
    detail: 'Explore society and human behavior through Social Studies, Political Science, and Sociology. Gateway to journalism, media, social work, and education careers.',
  },
];

const facilities = [
  'Digital classrooms with modern technology',
  'Well-equipped science laboratories',
  'Comprehensive library and reading spaces',
  'Sports and physical education facilities',
  'Art, culture, and activity centers',
  'Student support and counseling services',
];

export default function Academics() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const anchor = document.querySelector(location.hash);
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.hash]);

  return (
    <div className="academics-page">
      <section className="academics-hero">
        <div className="container">
          <span className="section-label">Academic Programs</span>
          <h1 className="section-title">Science, Management, Law, and Humanities Programs (NEB Curriculum)</h1>
          <p className="section-subtitle">
            Himalayan World School offers four distinct +2 academic pathways designed to meet diverse student interests and career aspirations. Each program combines rigorous academics with holistic development.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container stream-list">
          {streams.map(({ id, title, grades, detail }, index) => (
            <article className="stream-card" id={id} key={id}>
              <span className="stream-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2>{title}</h2>
                <strong>{grades}</strong>
              </div>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section facilities-section">
        <div className="container">
          <span className="section-label">Learning Environment</span>
          <h2 className="section-title">Modern facilities supporting academic excellence and student development.</h2>
          <div className="facility-grid">
            {facilities.map((facility) => (
              <article className="facility-card" key={facility}>
                <span aria-hidden="true" />
                <h3>{facility}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
