import React from "react";
import { Branches } from "../../db";
import { Gallery } from "iconsax-react";
import "./MainResturantBranches.css";

export default function MainResturantBranches() {
  console.log(Branches);
  return (
    <div className="MainResturantBranches">
      <h4 className="MainResturantBranches-title">ترخینه گردی</h4>
      <div className="MainResturantBranches-cards">
        {Branches.map((branche) => (
          <div key={branche.id} className="MainResturantBranches-card">
            <div className="MainResturantBranches-card-top">
              <img src={branche.images[1]} alt="" className="MainResturantBranches-card-img" />
              <Gallery color="white" className="MainResturantBranches-card-img-icon" />
            </div>

            <div className="MainResturantBranches-card-info">
              <h6>شعبه {branche.title}</h6>
              <p>{branche.adress}</p>
              <button>صفحه شعبه</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
