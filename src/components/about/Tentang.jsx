import React from 'react';
import '../Home/awal.css';
import './about.css';
import Kontak from '../contact/Kontak';
const Tentang = () => {
  return (
    <>
      <div className="header">
        <div className="header-box">
          <div className="title">
            <h1 className="animate__animated animate__jackInTheBox animate__delay-1s">
              Tentang
              <br />
              Spacedu
            </h1>
          </div>
        </div>
      </div>

      <svg className="svg tentang-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320">
        <path
          fill="#b6ceb8"
          fill-opacity="1"
          d="M0,256L48,250.7C96,245,192,235,288,245.3C384,256,480,288,576,282.7C672,277,768,235,864,229.3C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="services">
        <div className="container">
          <div className="services-box">
            <div className="box">
              {/* <i className="fa-solid fa-award" data-aos="fade-up" data-aos-duration="1000"></i> */}
              <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                Apa itu Spacedu?
              </h1>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                Kepo kan sama Spacedu?? Yuk lihat dibawah inii..
              </p>
            </div>
            <div className="boxes">
              <div className="boxs">
                <img className="img" src="https://drive.google.com/uc?export=view&id=16ojb5qwNOtJJa9PiBoc_MgCbj-6zR7nb" alt="" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" />
                <div className="desc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
                  <h1>Spacedu</h1>
                  <p>
                    Spacedu merupakan sebuah platform digital yang disiapkan guna menunjang persiapan tes Kedinasan dan CPNS. Platform ujian online yang bisa diakses dimanapun dan kapanpun dengan keunggulan soal yang HOTS, Sertifikat nilai
                    setelah mengerjakan Tryout, Penilaian soal nasional, grup belajar, dan masih banyak lagi benefit yang didapat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Kontak />

      <div className="services">
        <div className="container">
          <div className="services-box">
            <div className="box">
              {/* <i className="fa-solid fa-award" data-aos="fade-up" data-aos-duration="1000"></i> */}
              <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                Kantor Spacedu
              </h1>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                Kantor Spacedu berada di Provinsi Jawa Tengah Gaess. Kalo kalian mau kepoin bisa liat map di bawah ini yaaa...
              </p>
            </div>
            <div className="mapc">
              <iframe
                className="map-contact"
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d960.6464076796757!2d110.86496285333308!3d-7.555129237427099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a171ac7a9a63b%3A0x270a5a229ac41dbe!2sAsrama%20Mahasiswa%20UNS!5e0!3m2!1sen!2sid!4v1684208952478!5m2!1sen!2sid"
                width="800"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <svg className="svg svgg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#b6ceb8"
          fill-opacity="1"
          d="M0,128L40,144C80,160,160,192,240,186.7C320,181,400,139,480,149.3C560,160,640,224,720,224C800,224,880,160,960,149.3C1040,139,1120,181,1200,181.3C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Tentang;
