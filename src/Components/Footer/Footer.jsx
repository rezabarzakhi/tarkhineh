import React from "react";
import { Branches } from "../../db";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-col">
        <div className="footer-links">
          <h5>دست رسی آسان</h5>
          <ul>
            <li className="footer-li">پرسش های متداول</li>
            <li className="footer-li">قوانین ترخینه</li>
            <li className="footer-li">حریم خصوصی</li>
          </ul>
        </div>
        <div className="footer-branches">
          <h5>شعبه های ترخینه</h5>
          <ul>
            {Branches.map((branch) => (
              <li key={branch.id} className="footer-li">
                {branch.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-col2">
        <h5>پیام به ترخینه</h5>
        <div className="footer-contactForm">
          <div className="footer-contactForm-inputs">
            <input
              type="text"
              name="username"
              id=""
              placeholder="نام و نام خانوادگی"
              className="footer-contactForm-input"
            />
            <input type="text" name="usernumber" id="" placeholder="شماره تماس" className="footer-contactForm-input" />
            <input
              type="text"
              name="useremail"
              id=""
              placeholder="آدرس ایمیل (اختیاری )"
              className="footer-contactForm-input"
            />
          </div>
          <div className="footer-contactForm-message">
            <textarea
              name="usermessage"
              id=""
              cols="30"
              rows="6"
              className="footer-contactForm-input"
              placeholder="پیام شما"></textarea>
            <button> ارسال پیام</button>
          </div>
        </div>
      </div>
    </div>
  );
}
