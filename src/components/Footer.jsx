import React, { useState } from "react";
import "../Styles/Footer.css";
import footer from "../assests/footer-image.webp";
import image2 from "../assests/right-arrow.svg";
import twitter from "../assests/twitter.svg";
import instagram from "../assests/instagram.svg";
import linkedin from "../assests/linkedin.svg";

function Footer() {
  const [showIcon, setShowIcon] = useState(false);

  const handleGetStartedHover = () => {
    setShowIcon(true);
  };
  const handleGetStartedLeave = () => {
    setShowIcon(false);
  };
  return (
    <div className="footer-container">
      <div className="dont-miss">
        <div className="dont-miss-left">
          <div className="f-button">
            <span style={{ fontSize: "18px" }}>👋</span>DON'T MISS OUT
          </div>
          <div className="f-heading">
            Unleash your
            <br /> <span style={{ color: "#FE8162" }}>Potential</span> with us
          </div>
          <div className="f-paragraph">
            Join our community of ambitious <br />
            individuals and organizations eager to <br /> make a difference.
          </div>
          <div className="Try-out-now">
            {" "}
            <button
              className="get-started-button"
              onMouseEnter={handleGetStartedHover}
              onMouseLeave={handleGetStartedLeave}
            >
              Try out now{" "}
              {showIcon && (
                <img src={image2} alt="Icon" className="icon-placeholder" />
              )}
            </button>
          </div>
        </div>
        <div className="dont-miss-right">
          <div className="happy-users">
            <span style={{ color: "#8247ff" }}>200+</span> Happy users
          </div>
          <div className="emoji-image">
            <img src={footer} alt="" />
          </div>
        </div>
      </div>
      <div className="top-footer">
        <div className="manage-wise-logo-2">
          {" "}
          <img className="manage-wise-2"
            src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"
            alt=""
          />
        </div>
        <ul className="nav-list">
          <li>Features</li>
          <li>FAQ</li>
          <li>Pricing</li>
          <li>Testimonials</li>
        </ul>
      </div>
      <div className="bottom-footer">
        <p className="copywrite">© 2022 ManageWise, Inc.</p>
        <div className="social-logos">
          <img className="t" src={instagram}></img>
          <img className="t" src={twitter} ></img>
          <img className="t" src={linkedin}></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
