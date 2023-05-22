import React from 'react';
import './card.css';

const Card = () => {
  return (
    <>
      <div className="card">
        <img className="card-image" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Gambar" />
        <div className="card-content">
          <h2 className="card-title">M. Rafli Nur Fikri</h2>
          <h6>PKN STAN 2021</h6>
          <p className="card-subtitle">"Soal TKP-nya banyak yang persis pas aku ujian dan seru banget grup belajarnya😊😘"</p>
        </div>
      </div>
    </>
  );
};

export default Card;
