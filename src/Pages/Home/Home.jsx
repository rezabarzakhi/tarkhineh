import React from "react";
import MainSlider from "../../Components/MainSlider/MainSlider";
import MainResturantMenu from "../../Components/MainResturantMenu/MainResturantMenu";
import MainAbout from "../../Components/MainAbout/MainAbout";
import MainResturantBranches from "../../Components/MainResturantBranches/MainResturantBranches";
import "./Home.css";
import BranchesPhotosSlider from "../../Components/BranchesPhotosSlider/BranchesPhotosSlider";
export default function Home() {
  return (
    <div className="home">
      <MainSlider />
      <MainResturantMenu />
      <MainAbout />
      <MainResturantBranches />
    </div>
  );
}
