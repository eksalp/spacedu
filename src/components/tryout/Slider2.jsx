import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';
import './slider.css';
import { datato2 } from './datato2';
import ReactGA from 'react-ga4';

const Slider2 = () => {
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
          {datato2.map((item, index) => {
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
                    <br />
                    GRATIS*
                    <br />- Penilaian Nasional <br />- Kunci Jawaban <br />- Sertifikat <br />- Grup Belajar
                  </p>
                  <a
                    onClick={() => {
                      ReactGA.event({
                        action: 'TO CPNS',
                        category: 'Tryout CPNS',
                        label: `${item.judul}`,
                      });
                    }}
                    href={item.link}
                  >
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

export default Slider2;
