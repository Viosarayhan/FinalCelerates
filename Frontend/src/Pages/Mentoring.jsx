import React from 'react';
import '../css/Mentoring.css';
import '../css/global.css';
import '../css/styleguide.css';
import Navbar from '../Components/Elements/Navbar/Navbar';
import Footer from '../Components/Elements/Footer/Footer';


const Mentoring = () => {
  return (
    <>
    <Navbar />
   <div className="course mb">
  <div className="div">
    <div className="overlap">
      <div className="bg-ractangel" />
      <div className="card-course">
        <div className="div-2">
          <img className="group" src="/public/assets/group 959.png" />
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper">JobReady CV</div>
            </div>
            <div className="frame-2">
              <p className="p">Buat CV kamu lebih menarik dan tingkatkan persentase peluang diterima
                kerja!</p>
            </div>
          </div>
          <a href="payment"><button className="button">
              <div className="label">Daftar</div>
            </button></a>
        </div>
        <div className="div-2">
          <img className="group" src="/public/assets/group 1070.png" />
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper">PortoPolish</div>
            </div>
            <div className="frame-2">
              <p className="p">Buat portofolio terbaikmu, agar Rekruter semakin tertarik untuk merekrut
                kamu!</p>
            </div>
            <a href="portopolish">
            <button className="button">
              <div className="label">Daftar</div>
            </button>
            </a>
          </div>
        </div>
        <div className="div-2">
          <img className="img" src="assets/Group 1069.png" />
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper">Chit-ChatView</div>
            </div>
            <div className="frame-2">
              <p className="p">Latih jawabanmu dan bangun rasa percaya diri untuk tampil maksimal saat
                wawancara!</p>
            </div>
            <a href="chitchat">
            <button className="button">
              <div className="label">Daftar</div>
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="header">
      <div className="text-nav">
        <p className="text-wrapper-2">Siapkan Karier Impianmu dengan Review Profesional!</p>
      </div> <br />
      <div className="text-nav-2">
        <p className="text-wrapper-3">
          Optimalkan CV, portofolio, dan keterampilan interview-mu bersama pakar industri.
        </p>
      </div>
      <div className="button-2">
        <a href="#section-bawah" style={{textDecoration: 'none'}}>
          <button className="label-wrapper">
            <div className="label-2">Mulai Sekarang!</div>
          </button>
        </a>
      </div>
    </div>

    <div className="frame-6" id="section-bawah">
      <div className="ilustrasi">
        <div className="overlap-group">
          <div className="overlap-2">
            <div className="frame-7">
              <div className="text-wrapper-6">oops!</div>
            </div>
          </div>
          <div className="overlap-3">
            <img src="assets/ilustrasi.png" alt />
          </div>
        </div>
      </div>
      <div className="teks">
        <div className="header-2">
          <div className="div-wrapper-2">
            <p className="text-wrapper-7">Kamu belum punya course buat dipelajarin nih!</p>
          </div>
          <div className="div-wrapper-2">
            <div className="text-wrapper-8">Yuk daftar coursenya dulu!</div>
          </div>
        </div>
        <a href="e-learning.html"> <button className="button-4">
            <div className="label-4">Daftar</div>
          </button></a>
      </div>
    </div>
    <div className="frame-8">
      <div className="div-wrapper-2">
        <div className="text-wrapper-7">Rekomendasi Paket&nbsp;&nbsp;Spesial Buat Kamu!</div>
      </div>
      <div className="frame-9">
      <div className="div-3">
          <div className="frame-10">
            <div className="text-wrapper-9">Carrer Excellent Pack</div>
          </div>
          <div className="frame-11">
            <div className="frame-12">
              <img className="frame-13" src="/public/assets/Group 1059.png" />
              <div className="frame-14">
                <p className="text-wrapper-10">10 kali review CV selama 4 bulan</p>
              </div>
            </div>
            <div className="frame-12">
              <img className="frame-13" src="/public/assets/Group 1059.png" />
              <div className="frame-14">
                <div className="text-wrapper-10">10 Template CV (Inggris/Indonesia)</div>
              </div>
            </div>
            <div className="frame-12">
              <img className="frame-13" src="/public/assets/Group 1059.png" />
              <div className="frame-16">
                <div className="text-wrapper-11">Linkedin Guiedline</div>
              </div>
            </div>
            <div className="frame-12">
              <img className="frame-13" src="/public/assets/Group 1059.png" />
              <div className="frame-16">
                <div className="text-wrapper-11">5 kali review portofolio</div>
              </div>
            </div>
            <div className="frame-12">
              <img className="frame-13" src="/public/assets/Group 1059.png" />
              <div className="frame-16">
                <div className="text-wrapper-11">5 kali review portofolio</div>
              </div>
            </div>
          </div>
          <div className="frame-17">
            <div className="frame-16">
              <div className="text-wrapper-12">Rp 50.000</div>
            </div>
            <a href="Pembayaran1.html" style={{textDecoration: 'none'}}>
              <button className=" button-5">
                <div className="label-5">Daftar</div>
              </button>
            </a>
          </div>
        </div>

        <div className="div-3">
          <div className="frame-10">
            <div className="text-wrapper-9">Career Starter Kit</div>
          </div>
          <div className="frame-11">
            <div className="frame-12">
              <img className="frame-13" src="/public/assets/Group 1059.png" />
              <div className="frame-14">
                <p className="text-wrapper-10">2 kali review CV selama satu bulan</p>
              </div>
            </div>
            <div className="frame-12">
              <img className="frame-13" src="/public/assets/Group 1059.png" />
              <div className="frame-14">
                <div className="text-wrapper-10">2 Template CV (Inggris/Indonesia)</div>
              </div>
            </div>
            <div className="frame-12">
              <img className="frame-13" src="/public/assets/Group 1059.png" />
              <div className="frame-16">
                <div className="text-wrapper-11">1 kali simulasi interview</div>
              </div>
            </div>
            <div className="frame-12">
              <img className="frame-13" src="/public/assets/Group 1059.png" />
              <div className="frame-16">
                <div className="text-wrapper-11">1 kali review portofolio</div>
              </div>
            </div>
          </div>
          <div className="frame-17">
            <div className="frame-16">
              <div className="text-wrapper-12">Rp 20.000</div>
            </div>
            <a href="Pembayaran1.html" style={{textDecoration: 'none'}}>
              <button className=" button-5">
                <div className="label-5">Daftar</div>
              </button>
            </a>
          </div>
        </div>
        <div className="div-3">
          <div className="frame-10">
            <div className="text-wrapper-9">Success Sprint Four</div>
          </div>
          <div className="frame-11">
            <div className="frame-12">
              <img className="frame-13" src="/public/assets/Group 1059.png" />
              <div className="frame-14">
                <p className="text-wrapper-10">4 kali review CV selama 2 bulan</p>
              </div>
            </div>
            <div className="frame-12">
              <img className="frame-13" src="/public/assets/Group 1059.png" />
              <div className="frame-14">
                <div className="text-wrapper-10">4 Template CV (Inggris/Indonesia)</div>
              </div>
            </div>
            <div className="frame-12">
              <img className="frame-13" src="/public/assets/Group 1059.png" />
              <div className="frame-16">
                <div className="text-wrapper-11">4 kali simulasi interview</div>
              </div>
            </div>
            <div className="frame-12">
              <img className="frame-13" src="/public/assets/Group 1059.png" />
              <div className="frame-16">
                <div className="text-wrapper-11">4 kali review portofolio</div>
              </div>
            </div>
          </div>
          <div className="frame-17">
            <div className="frame-16">
              <div className="text-wrapper-12">Rp 30.000</div>
            </div>
            <a href="Pembayaran1.html" style={{textDecoration: 'none'}}>
              <button className=" button-5">
                <div className="label-5">Daftar</div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
</>
  );
};

export default Mentoring;
