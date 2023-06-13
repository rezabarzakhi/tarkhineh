import React, { useEffect, useState } from "react";
import MainSlider from "../../Components/MainSlider/MainSlider";
import CardsRow from "../../Components/CardsRow/CardsRow";
import { MainFoods } from "../../db";
import "./Branches.css";
import { useParams } from "react-router-dom";
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
  // Update mainBranch state when the ID changes
  useEffect(() => {
    setMainBranch(id);
  }, [id]);
  // Filter MainFoods based on the mainBranch value
  useEffect(() => {
    setBranchFoods(MainFoods.filter((food) => food[mainBranch] === true));
  }, [mainBranch]);
  // Update specialOffers, popularFoods, and persianFoods based on the branchesFoods value
  useEffect(() => {
    setSpecialOffers(branchesFoods.filter((food) => food.specialOffer));
    setPopularFoods(branchesFoods.filter((food) => food.rating > 2));
    setPersianFoods(branchesFoods.filter((food) => food.category === "غذاهای ایرانی"));
  }, [branchesFoods]);

  return (
    <div className="branches">
      <MainSlider />
      <div className="rows">
        <CardsRow RowTitle={"پیشنهاد ویژه"} CardsItems={specialOffers} backgroundcolor={"#fff"} />
        <CardsRow RowTitle={"غذاهای محبوب"} CardsItems={popularFoods} backgroundcolor={"#315F41"} />
        <CardsRow RowTitle={"غذا های ایرانی"} CardsItems={persianFoods} backgroundcolor={"#fff"} />
      </div>
    </div>
  );
}
