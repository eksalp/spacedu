import React from 'react';
import './carousel.css';

const Stats = () => {
  return (
    <section className="stats" aria-label="our stats">
      <div className="container_stats">
        <ul className="stats-card has-bg-image">
          <li>
            <p className="card-text">
              <span className="h1">10K+</span>

              <spna className="span">Pengguna</spna>
            </p>
          </li>

          <li>
            <p className="card-text">
              <span className="h1">50K+</span>

              <spna className="span">Soal HOTS</spna>
            </p>
          </li>

          <li>
            <p className="card-text">
              <span className="h1">10+</span>

              <spna className="span">Tutor</spna>
            </p>
          </li>

          <li>
            <p className="card-text">
              <span className="h1">15+</span>

              <spna className="span">Promo per bulan</spna>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Stats;
