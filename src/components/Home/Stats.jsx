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
              <span className="h1">7518</span>

              <spna className="span">Completed Projects</spna>
            </p>
          </li>

          <li>
            <p className="card-text">
              <span className="h1">3472</span>

              <spna className="span">Happy Customers</spna>
            </p>
          </li>

          <li>
            <p className="card-text">
              <span className="h1">2184</span>

              <spna className="span">Expert Employees</spna>
            </p>
          </li>

          <li>
            <p className="card-text">
              <span className="h1">4523</span>

              <spna className="span">Awards Won</spna>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Stats;
