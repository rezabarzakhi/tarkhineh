import React, { useEffect, useState } from "react";
import MainSlider from "../../Components/MainSlider/MainSlider";
import CardsRow from "../../Components/CardsRow/CardsRow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { MainFoods, BranchesData } from "../../db";
import "./Branches.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useParams } from "react-router-dom";
import { CallCalling, Clock, Location, Star1 } from "iconsax-react";
export default function Branches() {
  // Retrieve the ID from the URL params
  const params = useParams();
  const id = params.ID;
  // State variables
  const [mainBranch, setMainBranch] = useState(id);
  const [branchesFoods, setBranchFoods] = useState([]);
  const [specialOffers, setSpecialOffers] = useState([]);
  const [popularFoods, setPopularFoods] = useState([]);
  const [persianFoods, setPersianFoods] = useState([]);
  const [branchData, setBranchData] = useState({ images: [], comments: [] });
  // Update mainBranch state when the ID changes
  useEffect(() => {
    setMainBranch(id);
  }, [id]);
  // Filter MainFoods based on the mainBranch value
  useEffect(() => {
    setBranchData(BranchesData.filter((branch) => branch.id === mainBranch)[0]);
    setBranchFoods(MainFoods.filter((food) => food[mainBranch] === true));
  }, [mainBranch]);
  // Update specialOffers, popularFoods, and persianFoods based on the branchesFoods value
  useEffect(() => {
    setSpecialOffers(branchesFoods.filter((food) => food.specialOffer));
    setPopularFoods(branchesFoods.filter((food) => food.rating > 2));
    setPersianFoods(branchesFoods.filter((food) => food.category === "غذاهای ایرانی"));
  }, [branchesFoods]);
  console.log(branchData.comments);

  return (
    <div className="branches">
      <MainSlider />
      <div className="rows">
        <CardsRow RowTitle={"پیشنهاد ویژه"} CardsItems={specialOffers} backgroundcolor={"#fff"} />
        <CardsRow RowTitle={"غذاهای محبوب"} CardsItems={popularFoods} backgroundcolor={"#315F41"} />
        <CardsRow RowTitle={"غذا های ایرانی"} CardsItems={persianFoods} backgroundcolor={"#fff"} />
      </div>
      <div className="branchDataCard">
        <h4> شعبه {branchData.title}</h4>
        <Swiper navigation={true} modules={[Navigation]} className="branchSlider">
          {branchData.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt="" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="branchDataCard-info">
          <div className="branchDataCard-info-detail">
            <CallCalling className="icon" />
            <p>{branchData.tel}</p>
          </div>
          <div className="branchDataCard-info-detail">
            <Location className="icon" />
            <p>{branchData.adress}</p>
          </div>
          <div className="branchDataCard-info-detail">
            <Clock className="icon" />
            <p>{branchData.worktime}</p>
          </div>
        </div>
        <div className="brancheComents">
          <h4>نظرات کاربران</h4>
          <Swiper
            slidesPerView={2}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="branchComentsRow">
            {branchData.comments.map((coment, index) => (
              <SwiperSlide key={index} className="brancheComentsCard">
                <div className="brancheComentsCardInfo">
                  <img src={coment.img} alt="" loading="lazy" />
                  <p>{coment.username}</p>
                  <p>{coment.date}</p>
                </div>
                <div className="brancheComentsCardMessage">
                  <p>{coment.message}</p>
                  <p className="brancheComentsCardRate">
                    <Star1 className="star" />
                    {coment.rate.toLocaleString("fa-FA")}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
