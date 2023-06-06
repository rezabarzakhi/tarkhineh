import React from "react";
import "./MainResturantMenu.css";
import { MainMenu } from "../../db";
import { NavLink } from "react-router-dom";

export default function MainResturantMenu() {
  return (
    <div className="MainResturantMenu">
      <h2>منوی رستوران</h2>
      <div className="MainResturantMenu-menu">
        {MainMenu.map((MenuItem) => (
          <NavLink key={MenuItem.id} to={MenuItem.src}>
            <div key={MenuItem.id} className="MainResturantMenu-menu-item">
              <img src={MenuItem.img} alt="" className="MainResturantMenu-img" />
              <div className="MainResturantMenu-menu2"></div>
              <button className="MainResturantMenu-btn">{MenuItem.title}</button>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
