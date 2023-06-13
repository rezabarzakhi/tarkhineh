import React from "react";
import Navbar from "../Navbar/Navbar";
import { User, ShoppingCart, SearchNormal1, HambergerMenu } from "iconsax-react";
import "./Header.css"
export default function Header() {
  return (
    <div className="header">
      <div className="header-warpper">
        <div className="header-icons-section">
          <div className="header-icons">
            <User className="header-icon" />
          </div>
          <div className="header-icons">
            <ShoppingCart className="header-icon" />
          </div>
          <div className="header-icons">
            <SearchNormal1 className="header-icon" />
          </div>
        </div>
        <div className="header-navbar">
          <Navbar/>
        </div>
        <div className="header-logo">
          <img src="/images/Logo.png" alt="tarkhinehLogo" className="logo" />
        </div>
      </div>
    </div>
  );
}
