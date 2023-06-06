import React from "react";
import MainSlider from "../../Components/MainSlider/MainSlider";
import MainResturantMenu from "../../Components/MainResturantMenu/MainResturantMenu";
import MainAbout from "../../Components/MainAbout/MainAbout";
import MainResturantBranches from "../../Components/MainResturantBranches/MainResturantBranches";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <MainSlider className="home-slider" />
      <MainResturantMenu />
      <MainAbout />
      <MainResturantBranches />
    </div>
  );
}
