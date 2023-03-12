import React from "react";
import "./Footer.scss";

function Footer() {
  return (

    <div className="footer">
      <div className="container">
      <hr />
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Content Writing</span>
            <span>Video & Animation</span>
            <span>Web & App Development</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Skillपुर</span>
            <span>Buying on Skillपुर</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Blog</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From Skillपुर</h2>
            <span>Skillपुर Business</span>
            <span>Skillपुर Pro</span>
            <span>Guides</span>
            <span>Get Inspired</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Skillपुर </h2>
            <span>© Skillपुर Pvt. Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>INR</span>
            </div>
            {/* <img src="/img/accessibility.png" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;