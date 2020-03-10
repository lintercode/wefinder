import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <header id="app-header">
        <div id="brand">
            <a id="brand-logo" href="/"><i className="fas fa-search"></i></a>
            <span id="brand-name">Wefinder</span>
        </div>
        <nav>
            <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Join</a></li>
            </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
