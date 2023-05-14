import React from 'react';
import '../Home/awal.css';
import './kontak.css';

const Kontak = () => {
  return (
    <>
      <div className="header">
        <div className="header-box">
          <div className="title">
            <h1 className="animate__animated animate__jackInTheBox animate__delay-1s">
              Contact Spacedu
              <br />
              For More Info
            </h1>
          </div>
        </div>
      </div>

      <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320">
        <path
          fill="#b6ceb8"
          fill-opacity="1"
          d="M0,256L48,250.7C96,245,192,235,288,245.3C384,256,480,288,576,282.7C672,277,768,235,864,229.3C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Kontak;
