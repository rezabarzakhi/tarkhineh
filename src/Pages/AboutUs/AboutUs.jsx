import React from "react";
import { User, Diagram, HomeWifi, MenuBoard } from "iconsax-react";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <div className="About">
      <div className="AboutHead">
        <img src="/images/About.jpg" alt="" />
        <h2>درباره ترخینه بیشتر بدانید!</h2>
      </div>
      <h4 className="AboutTitle">درباره ما</h4>
      <section className="AboutBody">
        <div className="AboutImg">
          <img src="/images/AboutUs.jpg" alt="" />
        </div>
        <div>
          <p>
            رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی این سال‌ها همواره با ارائه غذاهای باکیفیت
            و سرویس سریع و به موقع در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولیت جلب رضایت مشتریان
            بوده است. دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه
            داشته و حتی با نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه شعبات خود را
            افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی
            با کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن و آسانسور برای افراد
            کم‌توان و سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند.
            <br /> چشم انداز: در آینده‌ای نزدیک تالار پذیرایی شعبات راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های
            بزرگ شما خواهند بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند.
          </p>
        </div>
      </section>
      <section className="AboutFeatures">
        <div className="AboutFeaturesItems">
          <User  className="Icon"/>
          <p>پرسنلی مجرب و حرفه‌ای</p>
        </div>
        <div className="AboutFeaturesItems">
          <Diagram className="Icon" />
          <p>کیفیت بالای غذاها</p>
        </div>
        <div className="AboutFeaturesItems">
          <HomeWifi className="Icon" />
          <p>محیطی دلنشین و آرام</p>
        </div>
        <div className="AboutFeaturesItems">
          <MenuBoard  className="Icon"/>
          <p>منوی متنوع</p>
        </div>
      </section>
    </div>
  );
}
