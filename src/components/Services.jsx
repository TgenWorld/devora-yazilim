import React from 'react';

function Services() {
  return (
    <section id="hizmetler" className="content-section-dark">
      <div className="container">
        <h2>Hizmetlerimiz</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Mobil Uygulama Geliştirme</h3>
            <p>iOS ve Android platformları için hibrit ve native, kullanıcı deneyimi odaklı mobil uygulamalar tasarlıyor ve geliştiriyoruz.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Web Geliştirme</h3>
            <p>Kurumsal web sitelerinden karmaşık web uygulamalarına ve e-ticaret platformlarına kadar modern ve hızlı çözümler sunuyoruz.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3>UI/UX Tasarım</h3>
            <p>Kullanıcıların seveceği, estetik ve sezgisel arayüzler tasarlayarak dijital ürünlerinizin başarısını garantiliyoruz.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🤖</div>
            <h3>Yapay Zeka Çözümleri</h3>
            <p>İş süreçlerinizi otomatize eden, veri analizi yapan ve verimliliği artıran yapay zeka tabanlı akıllı sistemler geliştiriyoruz.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;