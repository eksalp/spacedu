import React from 'react';
import './carousel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Stats = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="stats" aria-label="our stats">
      <div className="container_stats" data-aos="fade-up" data-aos-duration="1000">
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
