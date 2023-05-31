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

export default function NavbarMobile() {
  const [isShowNavbar, setIsShowNavbar] = useState(false);

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
            <li className="mobile-navbar-link text-captionSM  active">
              <Home /> صفحه اصلی
            </li>
            <li className="mobile-navbar-link  dropDown">
              <div className="text-captionSM">
                <MenuBoard /> منو
              </div>
              <ArrowDown2 />
            </li>
            <li className="mobile-navbar-link  dropDown">
              <div className="text-captionSM">
                <HomeHashtag /> شعبه
              </div>
              <ArrowDown2 />
            </li>
            <li className="mobile-navbar-link text-captionSM">
              <Profile2User /> درباره ما
            </li>
            <li className="mobile-navbar-link text-captionSM">
              <CallCalling /> تماس باما
            </li>
          </ul>
        </div>
      ) : (
        <HambergerMenu className="mobile-navbar-icon" onClick={showHandler}/>
      )}
    </>
  );
}
