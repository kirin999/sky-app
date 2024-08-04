import React from "react";
import "./style/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">いろいろな写真</h1>
        <nav className="header-nav">
          <ul>
            <li>
              <a href="/sky-app/">トップ</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
