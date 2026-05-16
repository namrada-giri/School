import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const heroImage =
  "https://images.unsplash.com/photo-1427504494785-cddc0c5ae551?auto=format&fit=crop&w=1200&q=80";
const campusImage =
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80";
const studentsImage =
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80";

const team = [
  [
    "Leadership Team",
    "Principal & Administrators",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  ],
  [
    "Academic Head",
    "Academics & Curriculum",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  ],
  [
    "Admission Team",
    "Student Registration",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  ],
  [
    "Faculty Members",
    "Expert Teachers",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  ],
  [
    "Student Support",
    "Counseling & Guidance",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  ],
  [
    "Operations",
    "Campus Management",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  ],
];

const updates = [
  [
    "Admissions Now Open for Academic Year 2026-27",
    "May 14, 2026",
    "Admissions",
  ],
  [
    "Science Program - Excellence in STEM Education",
    "May 14, 2026",
    "Academics",
  ],
  ["Campus Tour and Open House", "May 10, 2026", "Events"],
];

const accolades = [
  [
    "30+ Years",
    "of academic excellence and trusted institution commitment to quality education.",
  ],
  [
    "Multiple Programs",
    "Science, Management, Law, and Humanities streams available for students.",
  ],
  [
    "Holistic Growth",
    "Academic excellence combined with co-curricular and extracurricular opportunities.",
  ],
];

const testimonials = [
  [
    "Proud Parent",
    "Parents",
    "The quality of education and supportive environment has helped our child excel academically and personally.",
  ],
  [
    "Success Stories",
    "Alumni",
    "Himalayan World School provided me with excellent academics, discipline, and confidence for my career.",
  ],
  [
    "Student Feedback",
    "Current Student",
    "The college offers a nurturing atmosphere where I can focus on my studies and develop leadership skills.",
  ],
];

const faqs = [
  [
    "What academic programs does Himalayan World School offer?",
    "We offer four +2 streams: Science, Management, Law, and Humanities, all following the NEB curriculum with comprehensive support.",
  ],
  [
    "Where is the college located?",
    "Our college is located in Jorpati, Gokarneshwor-6, Kathmandu, in a peaceful and student-friendly environment.",
  ],
  [
    "What admission requirements do you have?",
    "Admission requires successful completion of SEE examination with a minimum GPA, entrance evaluation, and interview process.",
  ],
  [
    "What facilities are available to students?",
    "We provide digital classrooms, science laboratories, library, sports facilities, cultural activities, and comprehensive student support services.",
  ],
];

const ArrowIcon = () => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </svg>
);

export default function Home() {
  return (
    <div className="home ecole-home">
      <section className="ecole-hero">
        <img src={heroImage} alt="Himalayan World School campus" />
        <div className="ecole-hero-overlay" />
        <div className="ecole-hero-caption">
          <span>30+ Years of Academic Excellence</span>
          <h1>Admissions 2026-27</h1>
          <Link to="/admissions" className="hero-enquire">
            Enquire Now
          </Link>
        </div>
      </section>

      <section className="enquiry-strip" id="enquire">
        <div className="container enquiry-inner">
          <h2>Enquire Now</h2>
          <p>
            For admission procedure, registration, fee structure, and campus
            visit details.
          </p>
          <Link to="/admissions" className="btn-primary">
            I'm Interested <ArrowIcon />
          </Link>
        </div>
      </section>

      <section className="section welcome-section">
        <div className="container welcome-grid">
          <div className="welcome-copy">
            <span className="small-title">Welcome to</span>
            <h2>Himalayan World School, Kathmandu</h2>
            <div className="official-tabs">
              <button>Overview</button>
              <button>Our Team</button>
              <button>Programs</button>
              <button>About College</button>
            </div>
            <p>
              With over 30 years of academic excellence, Himalayan World School
              is a trusted institution committed to shaping bright futures
              through quality education. Located in Jorpati, Gokarneshwor-6,
              Kathmandu, we provide a nurturing and inspiring environment where
              students are encouraged to learn, grow, and succeed.
            </p>
            <p>
              Our foundation is built on strong academic values, discipline, and
              innovation, with a focus on holistic development that goes beyond
              the classroom. We strive to empower students with knowledge,
              critical thinking, and leadership skills, preparing them to face
              the challenges of an evolving world with confidence and integrity.
            </p>
          </div>
          <div className="welcome-media">
            <img src={studentsImage} alt="Students learning together" />
          </div>
        </div>
      </section>
      {/* 
      <section className="team-section">
        <div className="container">
          <div className="section-heading-center">
            <span className="small-title">Our Team</span>
            <h2>Leadership and academic support</h2>
          </div>
          <div className="team-grid">
            {team.map(([name, role, image]) => (
              <article className="team-card" key={name}>
                <img src={image} alt={name} className="team-image" />

                <h3>{name}</h3>
                <p>{role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
*/}
      <section className="results-section">
        <div className="container results-grid">
          <img src={campusImage} alt="College campus and facilitiess" />
          <div>
            <span className="small-title">About College</span>
            <h2>
              Academic excellence with holistic development and values-based
              education.
            </h2>
            <p>
              Himalayan World School is dedicated to fostering excellence,
              unlocking potential, and building a pathway toward lifelong
              success. Our commitment to quality education is reflected in our
              modern teaching methodologies, experienced faculty, and
              student-centered learning approach.
            </p>
            <Link to="/about" className="btn-primary">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="section updates-section">
        <div className="container">
          <div className="section-heading-center">
            <h2>Latest Updates</h2>
          </div>
          <div className="updates-grid">
            {updates.map(([title, date, category]) => (
              <article className="update-card" key={title}>
                <div className="update-image" />
                <span>{category}</span>
                <h3>{title}</h3>
                <p>By Himalayan World School / {date}</p>
                <Link to="/news">Read More</Link>
              </article>
            ))}
          </div>
          <div className="center-action">
            <Link to="/news" className="btn-ghost">
              View All
            </Link>
          </div>
        </div>
      </section>

      <section className="accolades-section">
        <div className="container">
          <div className="section-heading-center">
            <h2>Himalayan World School Highlights</h2>
          </div>
          <div className="accolades-grid">
            {accolades.map(([title, text]) => (
              <article className="accolade-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="join-band">
        <div className="container">
          <h2>Join Himalayan World School for Excellence</h2>
          <p>
            For admissions enquiry, campus tour, and information call
            +977-1-xxxxxxxx or visit us
          </p>
          <Link to="/admissions" className="btn-primary">
            I'm Interested
          </Link>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container">
          <div className="section-heading-center">
            <span className="small-title">Testimonial</span>
            <h2>What They Say About Himalayan World School</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map(([name, role, text]) => (
              <article className="testimonial-card" key={name}>
                <p>{text}</p>
                <h3>{name}</h3>
                <span>{role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-heading-center">
            <h2>FAQ</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>
                  Q{index + 1}. {question}
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
