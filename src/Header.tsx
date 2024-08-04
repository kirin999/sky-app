import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Sky Journey</h1>
        <nav className="header-nav">
          <ul>
            <li>
              <a href="/sky-app/">最初のページに戻る</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
