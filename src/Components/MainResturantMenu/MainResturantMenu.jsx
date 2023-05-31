import React from "react";
import "./MainResturantMenu.css";
import { MainMenu } from "../../db";

export default function MainResturantMenu() {
  return (
    <div className="MainResturantMenu">
      <h2>منوی رستوران</h2>
      <div className="MainResturantMenu-menu">
        {MainMenu.map(MenuItem => (

          <div key={MenuItem.id} className="MainResturantMenu-menu-item">
            <img src={MenuItem.img} alt="" className="MainResturantMenu-img" />
            <div  className="MainResturantMenu-menu2"></div>
            <button className="MainResturantMenu-btn">{MenuItem.title}</button>
          </div>
        )
        )}

      </div>
    </div>
  );
}
