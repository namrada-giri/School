import React, { useEffect, useState } from 'react';
import { getNews } from '../services/api';
import './News.css';

const fallbackNews = [
  {
    id: 1,
    category: 'admissions',
    created_at: '2026-05-14',
    title: 'Admissions 2026-27 Now Open',
    excerpt: 'Himalayan World School invites applications for Science, Management, Law, and Humanities programs. Applications now open with admission procedure starting immediately.',
  },
  {
    id: 2,
    category: 'academics',
    created_at: '2026-05-14',
    title: 'Science Program - STEM Excellence Initiative',
    excerpt: 'Our Science program combines rigorous academics with modern laboratories. Students gain hands-on experience in Physics, Chemistry, Biology, and Mathematics.',
  },
  {
    id: 3,
    category: 'events',
    created_at: '2026-05-10',
    title: 'Campus Tour and Open House',
    excerpt: 'Visit our campus in Jorpati, Kathmandu. Meet our faculty, explore facilities, and learn about student life at Himalayan World School.',
  },
];

export default function News() {
  const [news, setNews] = useState(fallbackNews);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    getNews()
      .then((response) => {
        if (Array.isArray(response.data.data) && response.data.data.length) {
          setNews(response.data.data);
        }
      })
      .catch(() => {});
  }, []);

  const categories = ['all', 'admissions', 'academics', 'events', 'student life'];
  const filtered = filter === 'all' ? news : news.filter((item) => item.category === filter);

  return (
    <div className="news-page">
      <section className="news-hero">
        <div className="container">
          <span className="section-label">Latest Updates</span>
          <h1 className="section-title">Events, achievements, and college news.</h1>
          <p className="section-subtitle">Stay updated with admissions, academics, and campus events at Himalayan World School.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filters">
            {categories.map((category) => (
              <button key={category} className={filter === category ? 'active' : ''} type="button" onClick={() => setFilter(category)}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="news-list">
            {filtered.map((item) => (
              <article className="news-article" key={item.id || item.title}>
                <div className="article-meta">
                  <span>{item.category || 'news'}</span>
                  <time>{new Date(item.created_at || Date.now()).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                </div>
                <h2>{item.title}</h2>
                <p>{item.excerpt || item.content || 'More details will be published soon.'}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
