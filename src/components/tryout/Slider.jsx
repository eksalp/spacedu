import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';
import './slider.css';
import { datato } from './datato';

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      new Swiper(sliderRef.current, {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centeredSlides: true,
        fadeEffect: {
          crossFade: true,
        },
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        },
      });
    }
  }, []);

  return (
    <div className="slider-container swiper">
      <div className="slider-content" ref={sliderRef}>
        <div className="card-wrapper swiper-wrapper">
          {datato.map((item, index) => {
            return (
              <div className="card-to swiper-slide" key={index}>
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-imag-to">
                    <img src={item.gambar} className="card-img-to" alt="promo" />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">{item.judul}</h2>
                  <p className="description">
                    <span className="harga-promo">{item.harga}</span>
                    <span className="coret">Rp19.500</span>
                    <br />
                    free grup belajar*
                  </p>
                  <a href={item.link}>
                    <button className="button">Daftar Tryout</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="swiper-button-next swiper-navBtn"></div>
      <div className="swiper-button-prev swiper-navBtn"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Slider;
