import React from "react";
import { NavLink } from "react-router-dom";
import { Branches } from "../../../db";
import "./NavbarDesktop.css";

export default function NavbarDesktop() {
  return (
    <div>
      <ul className="desktop-navbar">
        <NavLink to="/" className="desktop-navbar-link text-bodyXL">
          صفحه اصلی
        </NavLink>
        <NavLink to="#" className="desktop-navbar-link text-bodyXL dropdown ">
          شعبه
          <div className="dropdown-content">
            {Branches.map((branch) => (
              <NavLink className="text-bodyXL" key={branch.id} to={`/branches/${branch.id}`}>
                {branch.title}
              </NavLink>
            ))}
          </div>
        </NavLink>
        <NavLink to="/menu" className="desktop-navbar-link text-bodyXL">
          منو
        </NavLink>
        <NavLink to="/getbranche" className="desktop-navbar-link text-bodyXL">
          اعطای نمایندگی
        </NavLink>
        <NavLink to="/about" className="desktop-navbar-link text-bodyXL">
          درباره ما
        </NavLink>
        <NavLink to="/contact" className="desktop-navbar-link text-bodyXL">
          تماس با ما
        </NavLink>
      </ul>
    </div>
  );
}
