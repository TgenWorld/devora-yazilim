import React from 'react';

function Header() {
  return (
    <header className="navbar">
      <div className="container">
        <a href="#" className="logo">Devora<span>Yazılım</span></a>
        <nav>
          <ul>
            <li><a href="#hakkimizda">Hakkımızda</a></li>
            <li><a href="#hizmetler">Hizmetler</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim" className="cta-button">İletişime Geç</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;