import React from 'react';
import './carousel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const CTA = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section class="cta">
      <div class="container_cta">
        <div class="cta-card">
          <h3 class="cta-title">Mau info terbaru dari Spacedu</h3>

          <p class="cta-text">Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back.</p>

          <form action="" class="cta-form">
            <input type="email" name="email" placeholder="Your email address" />

            <button type="submit" class="btn btn-secondary">
              Try It Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
