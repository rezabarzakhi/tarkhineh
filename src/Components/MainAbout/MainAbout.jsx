import React from 'react'
import { User, Diagram, HomeWifi, MenuBoard } from "iconsax-react";
import "./MainAbout.css";

export default function MainAbout() {
  return (
    <div className="mainAbout">
      <div className="mainAbout-summery">
        <h4 className="mainAbout-summery-title">رستوران‌های زنجیره‌ای ترخینه</h4>
        <p className="mainAbout-summery-body">
          مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف
          ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن
          در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
        </p>
        <button className="mainAbout-summery-btn"> اطلاعات بیشتر</button>
      </div>
      <div className="mainAbout-feautres">
        <div className="mainAbout-feautres-item">
          <User className="mainAbout-feautres-item-icon" />
          <p className="mainAbout-feautres-item-title">پرسنل مجرب و حرفه ای</p>
        </div>
        <div className="mainAbout-feautres-item">
          <Diagram className="mainAbout-feautres-item-icon" />
          <p className="mainAbout-feautres-item-title">کیفیت بالای غذاها</p>
        </div>
        <div className="mainAbout-feautres-item">
          <HomeWifi className="mainAbout-feautres-item-icon" />
          <p className="mainAbout-feautres-item-title">محیطی دلنشین و آرام</p>
        </div>
        <div className="mainAbout-feautres-item">
          <MenuBoard className="mainAbout-feautres-item-icon" />
          <p className="mainAbout-feautres-item-title"> منوی</p>
        </div>
      </div>
    </div>
  );
}
