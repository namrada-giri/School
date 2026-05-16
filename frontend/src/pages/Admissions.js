import React, { useState } from 'react';
import { submitAdmission } from '../services/api';
import './FormPage.css';

const initialForm = {
  student_name: '',
  parent_name: '',
  email: '',
  phone: '',
  grade_applying: '',
  date_of_birth: '',
  address: '',
  previous_school: '',
  message: '',
};

export default function Admissions() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const onChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setError('');

    try {
      await submitAdmission(form);
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setError(err.response?.data?.message || 'The enquiry could not be submitted. Please check the details and try again.');
      setStatus('error');
    }
  };

  return (
    <div className="form-page">
      <section className="form-hero">
        <div className="container">
          <span className="section-label">Admissions 2026-27</span>
          <h1 className="section-title">Enquire for Himalayan World School</h1>
          <p className="section-subtitle">
            Request support for admission procedure, online registration, application process,
            fee structure, or schedule a campus visit.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container form-grid">
          <aside className="form-info">
            <div className="info-card">
              <h3>Admission Journey</h3>
              <ol className="process-list">
                <li>Complete application form with required documents</li>
                <li>Participate in entrance evaluation assessment</li>
                <li>Attend personal interview or counseling session</li>
                <li>Final confirmation and enrollment process</li>
              </ol>
            </div>
            <div className="info-card">
              <h3>What You Need to Know</h3>
              <div className="date-item"><span>Admission procedure</span><strong>Available</strong></div>
              <div className="date-item"><span>Application form</span><strong>Available</strong></div>
              <div className="date-item"><span>Required documents</span><strong>Request details</strong></div>
              <div className="date-item"><span>Campus visit</span><strong>Schedule now</strong></div>
            </div>
          </aside>

          <div className="form-card">
            {status === 'success' ? (
              <div className="success-state">
                <span className="success-mark" aria-hidden="true" />
                <h2>Enquiry submitted</h2>
                <p>Thank you for your interest in Himalayan World School. The admissions team will contact you with application and campus visit information.</p>
                <button className="btn-primary" type="button" onClick={() => setStatus('idle')}>Submit Another Enquiry</button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h2 className="form-title">Admission Enquiry Form</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="student_name">Student full name</label>
                    <input id="student_name" name="student_name" value={form.student_name} onChange={onChange} required placeholder="Student name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="parent_name">Parent or guardian name</label>
                    <input id="parent_name" name="parent_name" value={form.parent_name} onChange={onChange} required placeholder="Parent name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input id="email" type="email" name="email" value={form.email} onChange={onChange} required placeholder="parent@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <input id="phone" name="phone" value={form.phone} onChange={onChange} required placeholder="+977 9557291888" />
                  </div>  
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="grade_applying">Grade applying for</label>
                    <select id="grade_applying" name="grade_applying" value={form.grade_applying} onChange={onChange} required>
                      <option value="">Select grade</option>
                      <option value="Grade 11">Grade 11</option>
                      <option value="Grade 12">Grade 12</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="date_of_birth">Date of birth</label>
                    <input id="date_of_birth" type="date" name="date_of_birth" value={form.date_of_birth} onChange={onChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="previous_school">Previous school</label>
                    <input id="previous_school" name="previous_school" value={form.previous_school} onChange={onChange} placeholder="School name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">City and state</label>
                    <input id="address" name="address" value={form.address} onChange={onChange} placeholder="City, State" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Requirement</label>
                  <textarea id="message" name="message" value={form.message} onChange={onChange} rows={5} placeholder="Mention your academic interest (Science, Management, Law, Humanities), fee structure, admission procedure, or any other query." />
                </div>
                {error && <div className="form-error">{error}</div>}
                <button type="submit" className="btn-primary submit-btn" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
