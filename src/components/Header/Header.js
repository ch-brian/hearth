import React from 'react';
import './Header.css';

import logo from '../../assets/hearth_logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img className="logo" src={logo} alt="Hearth Company Logo"></img>
        <span className="logo_text">Hearth Takehome</span>
      </div>
    </div>
  );
};

export default Header;
