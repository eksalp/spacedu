import React from 'react';
import './kaki.css';
import logo from './e.png';
import pembayaran from './ee.png';

const Footer = () => {
  return (
    <footer>
      <div class="container__footer">
        <div class="box__footer pp">
          <div class="logo">
            <img className="gambar" src={logo} alt="" />
          </div>
          <div class="terms">
            <p className="sizee">Spacedu merupakan salah satu startup yang bergerak di bidang pendidikan. Mempunyai tujuan untuk membantu anak muda untuk mewujudkan mimpi menjadi abdi negara.</p>
          </div>
        </div>
        <div class="box__footer r">
          <h4>Pembayaran</h4>
          <img className="bayar" src={pembayaran} alt="footer" />
        </div>

        <div class="box__footer r">
          <h4>Jelajah</h4>
          <p className="p sizee">Panduan Pendaftaran</p>
          <p className="p sizee">Panduan Pembayaran</p>
          <p className="p sizee">FAQ Peserta</p>
          <p className="p sizee">Cara Gabung Grub Belajar</p>
        </div>

        <div class="box__footer r wes">
          <h4>Social Media</h4>
          {/* <a href="https://www.google.com/">
            {' '}
            <i class="fab fa-facebook-square"></i> Facebook
          </a>
          <a href="https://www.google.com/">
            <i class="fab fa-twitter-square"></i> Twitter
          </a>
          <a href="https://www.google.com/">
            <i class="fab fa-linkedin"></i> Linkedin
          </a>
          <a href="https://www.google.com/">
            <i class="fab fa-instagram-square"></i> Instagram
          </a> */}

          <a href="https://www.google.com/">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://twitter.com/spaceduofficial">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.tiktok.com/@spaceeducation">
            <i className="fab fa-tiktok"></i> Tiktok
          </a>
        </div>
      </div>

      <div class="box__copyright">
        <hr />
        <p>
          All Right Reserved © 2023 <b>Spacedu</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
