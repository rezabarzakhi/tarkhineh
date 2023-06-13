import React, { useRef, useState } from "react";
import "./CardsRow.css";
import { ArrowLeft2, ArrowRight2, Heart, Star1 } from "iconsax-react";

export default function CardsRow({ RowTitle, CardsItems, backgroundcolor }) {

  const ref = useRef(null);
  //handel rightarrow show
  const [isShowRightAroow, setIsShowRightAroow] = useState(false);
  //handel scrollX
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    if (ref.current.scrollLeft < 0) {
      setIsShowRightAroow(true);
    } else {
      setIsShowRightAroow(false);
    }
  };
  // set title color based on background color
  let titleColor = backgroundcolor === "#fff" ? "black" : "white";
  return (
    <div className="rowWrapper" style={{ backgroundColor: backgroundcolor }}>
      <h4 className="cardsrow-title" style={{ color: titleColor }}>
        {RowTitle}
      </h4>
      <div ref={ref} className="cardsrow">
        {CardsItems.map((item) => (
          <div key={item.id} className="cardsrow-card">
            <img src={item.img} alt={item.name} />
            <h6>{item.name}</h6>
            <div className="cardsrow-cardinfo">
              <div>
                <p className="like">
                  <Heart className="heartIcon" />
                  <span> افزودن به علاقه مندی ها</span>
                </p>
                <p className="price">
                  {item.price.toLocaleString("fa-FA")} <span>%{item.off.toLocaleString("fa-FA")}</span>
                </p>
              </div>
              <div>
                <p className="finalPrice">
                  <Star1 className="starIcon" /> {item.rating.toLocaleString("fa-FA")}
                  <span>(امتیاز {item.votes.toLocaleString("fa-FA")})</span>
                </p>
                <p className="finalPrice">
                  {(item.price - (item.off * item.price) / 100).toLocaleString("fa-FA")} تومان
                </p>
              </div>
              <button>افزودن به سبد خرید</button>
            </div>
          </div>
        ))}
      </div>
      <div className="scrollbtn">
        <button className={isShowRightAroow ? "" : "notshow"} onClick={() => scroll(200)}>
          <ArrowRight2 />
        </button>
        <button onClick={() => scroll(-200)}>
          <ArrowLeft2 />
        </button>
      </div>
    </div>
  );
}
