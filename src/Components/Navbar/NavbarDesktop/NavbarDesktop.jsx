import React from "react";
import "./NavbarDesktop.css"

export default function NavbarDesktop() {
  return <div>
    <ul className="desktop-navbar">
        <li className="desktop-navbar-link text-bodyXL   active">صفحه اصلی</li>
        <li className="desktop-navbar-link text-bodyXL">شعبه</li>
        <li className="desktop-navbar-link text-bodyXL">منو</li>
        <li className="desktop-navbar-link text-bodyXL">اعطای نمایندگی</li>
        <li className="desktop-navbar-link text-bodyXL">درباره ما</li>
        <li className="desktop-navbar-link text-bodyXL">تماس باما</li>
    </ul>
  </div>;
}
