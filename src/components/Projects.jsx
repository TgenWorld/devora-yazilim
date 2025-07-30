import React from 'react';
import devoraLogo from '../assets/kodd.png';

function Projects() {
  return (
    <section id="projeler" className="content-section">
      <div className="container">
        <h2>Öne Çıkan Projelerimiz</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img src="src/assets/kodd.png" alt="Proje 1" />
            <div className="portfolio-info">
              <h3>E-Ticaret Platformu</h3>
              <p>Web Geliştirme</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="src/assets/kodd.png" alt="Proje 2" />
            <div className="portfolio-info">
              <h3>Sağlık Takip Mobil Uygulaması</h3>
              <p>Mobil Uygulama</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="src/assets/kodd.png" alt="Proje 3" />
            <div className="portfolio-info">
              <h3>Kurumsal Web Sitesi</h3>
              <p>Web Geliştirme & UI/UX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;