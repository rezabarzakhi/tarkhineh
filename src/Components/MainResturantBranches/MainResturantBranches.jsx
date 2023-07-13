import React, { useState } from "react";
import { BranchesData } from "../../db";
import  {Gallery}  from "iconsax-react";
import "./MainResturantBranches.css";
import BranchesPhotosSlider from "../BranchesPhotosSlider/BranchesPhotosSlider";

export default function MainResturantBranches() {
  const [sliderBranchID, setSliderBranchID] = useState();
  const [isShowSlider, setIsShowSlider] = useState(false);

  const handleShowSlider = (branchID) => {
      setSliderBranchID(branchID)
      setIsShowSlider(true)
  };
  return (
    <>
      {isShowSlider && (
        <div className="overlayBGC">
          <BranchesPhotosSlider setIsShowSlider={setIsShowSlider} sliderBranchID={sliderBranchID} />
        </div>
      )}

      <div className="MainResturantBranches">
        <h4 className="MainResturantBranches-title">ترخینه گردی</h4>
        <div className="MainResturantBranches-cards">
          {BranchesData.map((branche, index) => (
            <div key={branche.id} className="MainResturantBranches-card">
              <div className="MainResturantBranches-card-top" onClick={() => handleShowSlider(index)}>
                <img src={branche.images[1]} alt="" className="MainResturantBranches-card-img" />
                <Gallery size="16" color="white" className="MainResturantBranches-card-img-icon" />
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
    </>
  );
}
