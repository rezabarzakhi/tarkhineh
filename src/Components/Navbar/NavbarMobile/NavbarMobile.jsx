import React, { useState } from "react";
import {
  CloseSquare,
  Home,
  MenuBoard,
  HomeHashtag,
  Profile2User,
  CallCalling,
  ArrowDown2,
  HambergerMenu,
} from "iconsax-react";
import "./NavbarMobile.css";
import { NavLink } from "react-router-dom";
import { BranchesData } from "../../../db";
export default function NavbarMobile() {
  const [isShowNavbar, setIsShowNavbar] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const showHandler = () => {
    setIsShowNavbar((perv) => !perv);
  };
  return (
    <>
      {isShowNavbar ? (
        <div className="mobile-navber">
          <div className="mobile-navbar-top">
            <img src="./images/mobile-logo.png" alt="" className="mobile-navbar-logo" />
            <CloseSquare className="mobile-navbar-close" onClick={showHandler} />
          </div>
          <ul className="mobile-navbar-ul">
            <NavLink to="/" className="mobile-navbar-link text-captionSM" onClick={showHandler}>
              <Home /> صفحه اصلی
            </NavLink>
            <NavLink to="/menu" className="mobile-navbar-link  dropDown" onClick={showHandler}>
              <div className="text-captionSM">
                <MenuBoard /> منو
              </div>
              <ArrowDown2 />
            </NavLink>
            <NavLink to="#" className="mobile-navbar-link  dropDown" onClick={toggleDropdown}>
              <div className="text-captionSM">
                <HomeHashtag /> شعبه
              </div>
              <ArrowDown2 />
            </NavLink>
            {isDropdownOpen && (
              <>
                {BranchesData.map((branch) => (
                  <NavLink
                    className="mobile-navbar-link text-captionSM dropContent"
                    key={branch.id}
                    to={`/branches/${branch.id}`}
                    onClick={showHandler}>
                    {branch.title}
                  </NavLink>
                ))}
              </>
            )}
            <NavLink to="/about" className="mobile-navbar-link text-captionSM" onClick={showHandler}>
              <Profile2User /> درباره ما
            </NavLink>
            <NavLink to="/contact" className="mobile-navbar-link text-captionSM" onClick={showHandler}>
              <CallCalling /> تماس باما
            </NavLink>
          </ul>
        </div>
      ) : (
        <HambergerMenu className="mobile-navbar-icon" onClick={showHandler} />
      )}
    </>
  );
}
