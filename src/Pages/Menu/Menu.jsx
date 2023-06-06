import React, { useState } from "react";
import MainSlider from "../../Components/MainSlider/MainSlider";
import "./Menu.css";
import { MainFoods } from "../../db";

export default function Menu() {
  const [mainCategory, setMainCategory] = useState(MainFoods);
  const subCategory = [...new Set(mainCategory.map((food) => food.category))];
  console.log(subCategory);
  return (
    <div>
      <MainSlider />
      <div className="menu-mainCategorys">
        <ul>
          <li className="active" onClick={() => setMainCategory(MainFoods)}>
            غذای اصلی
          </li>
          <li onClick={() => setMainCategory(MainFoods)}>پیش غذا</li>
          <li onClick={() => setMainCategory(MainFoods)}>دسر</li>
          <li onClick={() => setMainCategory(MainFoods)}>نوشیدنی</li>
        </ul>
      </div>
      <div className="menu-subCategorys">
        <ul>
          {subCategory.map((cat, index) => (
            <li key={cat}>
              <a href={"#" + index}>{cat}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="menu-foods">
        {subCategory.map((subCat, index) => (
          <div key={subCat} className="menu-category">
            <h4 id={index}>
              {subCat}
            </h4>
            {mainCategory.map((food) => {
              if (food.category === subCat) {
                return (
                  <div key={food.id} className="food-card">
                    <img src={food.img} alt={food.name} className="food-card-img" />
                    <div className="food-card-info">
                      <h6>{food.name}</h6>
                      <div className="food-card-details">
                        <p>{food.ingredients}</p>
                        <div className="food-card-price">
                          {food.off > 0 && (
                            <span>
                              <p className="food-card-off">%{food.off.toLocaleString("fa-FA")}</p>
                              <p>{food.price.toLocaleString("fa-FA")}</p>
                            </span>
                          )}
                          <p>{(food.price - (food.off * food.price) / 100).toLocaleString("fa-FA")} تومان</p>
                        </div>
                      </div>
                      <button>افزودن به سبد خرید</button>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
