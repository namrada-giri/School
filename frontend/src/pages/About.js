import React from 'react';
import './About.css';

const values = [
  ['Academic Commitment', 'We are dedicated to maintaining high educational standards and encouraging students to pursue knowledge with determination, discipline, and a passion for excellence.'],
  ['Honesty & Ethics', 'We believe in building character through truthfulness, transparency, and strong moral values, fostering trust and respect within our community.'],
  ['Continuous Development', 'Learning is a lifelong process. We encourage personal and intellectual growth by motivating students to improve, adapt, and unlock their fullest potential.'],
  ['Accountability & Leadership', 'We inspire students to take ownership of their actions, develop leadership qualities, and contribute positively to society with a sense of duty and responsibility.'],
];

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div>
            <span className="section-label">About Himalayan World School</span>
            <h1 className="section-title">30+ Years of Academic Excellence in Kathmandu.</h1>
            <p className="section-subtitle">
              Founded with a vision to inspire academic excellence, personal growth, and lifelong learning, Himalayan World School is a distinguished educational institution located in Jorpati, Gokarneshwor-6, Kathmandu. Nestled in a peaceful, accessible, and student-friendly environment, the school provides an ideal atmosphere for focused learning, creativity, and holistic development.
            </p>
          </div>
          <div className="about-hero-card">
            <strong>30+ Years</strong>
            <span>of trusted institutional commitment to quality education</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mission-grid">
          {[
            ['Our Mission', 'To provide quality education that inspires academic excellence, personal growth, and lifelong learning. We are committed to creating a supportive and inclusive environment where students are encouraged to think critically, act responsibly, and grow with confidence.'],
            ['Our Vision', 'To be a leading educational institution recognized for excellence in academics, innovation, and holistic development. We aspire to empower students with the knowledge, skills, and values needed to succeed in a rapidly changing world while upholding integrity, compassion, and social responsibility.'],
            ['Our Commitment', 'With a strong commitment to academic excellence, holistic development, and student success, Himalayan World School continues to be a place where dreams are nurtured, talents are discovered, and futures are built.'],
          ].map(([title, text], index) => (
            <article className="mission-card" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <span className="section-label">Core Values That Define Our Learning Community</span>
          <h2 className="section-title">At Himalayan World School, our guiding values form the foundation of our educational journey.</h2>
          <div className="values-grid">
            {values.map(([title, text]) => (
              <article className="value-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section principal-section">
        <div className="container principal-card">
          <div className="principal-photo" />
          <div>
            <span className="section-label">Leadership</span>
            <h2>Academic Excellence and Student Growth</h2>
            <p>
              Himalayan World School is led by experienced and dedicated faculty members who are committed to mentoring students, helping them strengthen their academic foundations while encouraging curiosity and independent learning. Through interactive classrooms, project-based learning, and continuous academic support, we strive to achieve outstanding educational outcomes and prepare students for higher studies and professional success.
            </p>
            <strong>Himalayan World School, Jorpati, Gokarneshwor-6, Kathmandu</strong>
          </div>
        </div>
      </section>
    </div>
  );
}
