import React from 'react';

function Contact() {
  return (
    <section id="iletisim" className="content-section-dark">
      <div className="container">
        <h2>Bir Fikriniz mi Var?</h2>
        <p className="subtitle">Projenizi hayata geçirmek için ilk adımı atın. Bizimle iletişime geçin, size özel çözümlerimizi konuşalım.</p>

        {/* YENİ: Butonları gruplamak ve aralarında boşluk bırakmak için sarmalayıcı */}
        <div className="contact-buttons">
          
          {/* Mevcut E-posta Butonu */}
          <a href="mailto:info@devorayazilim.com" className="hero-button">info@devorayazilim.com</a>
          
          {/* YENİ: Tıklanabilir olmayan telefon numarası kutusu */}
          {/* div kullandık çünkü tıklanabilir bir link değil. */}
          <div className="hero-button non-clickable">+90 532 153 34 31</div>

        </div>
      </div>
    </section>
  );
}

export default Contact;