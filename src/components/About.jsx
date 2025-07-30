import React from 'react';
import devoraLogo from '../assets/logo.png';
function About() {
  return (
    <section id="hakkimizda" className="content-section">
      <div className="container">
        <h2>Hakkımızda</h2>
        <div className="about-content">
          <img src={devoraLogo} alt="Devora Yazılım Ekibi Logosu" className="about-image" />
          <div className="about-text">
            <h3>Biz Kimiz?</h3>
            <p>Devora Yazılım, 2025 yılında teknolojiye tutkulu iki genç girişimci tarafından kurulmuştur. Amacımız, en son teknolojileri kullanarak müşterilerimizin dijital dönüşüm süreçlerine liderlik etmek ve onlara rekabet avantajı sağlayacak özel yazılımlar sunmaktır. Sağlam teknik altyapıyı, yaratıcı ve yenilikçi bir vizyonla birleştiriyoruz.</p>
            <h3>Misyonumuz</h3>
            <p>Kullanıcı dostu, estetik ve fonksiyonel ürünler geliştirerek karmaşık problemleri basit çözümlere dönüştürmek ve teknolojinin gücünü herkes için erişilebilir kılmaktır.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;