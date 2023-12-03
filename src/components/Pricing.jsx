import React from "react";
import "../Styles/Pricing.css";
import tick from "../assests/green-tick.svg";

export default function Pricing() {
  return (
    <div id="pricing" className="pricing-container">
      <div className="pricing-button"><span style={{ fontSize: '18px' }}>💲</span>PRICING</div>
      <div className="pricing-heading">Select your ideal <span style={{color : '#FE8162'}}>Pricing </span>plan</div>
      <div className="pricing-paragraph">
        At Manage Wise, we believe in providing you with <br />
        pricing plans that adapt to your unique needs.
      </div>
      <div className="pricing-row">
        <div className="pricing-plan-a">
          <div className="pricing-plan-name">FREE</div>
          <div className="pricing-plan-price">
            $0<p className="month">/month</p>
          </div>
          <ul className="feature-list">
            <li className="feature-item">
              <img className="feature-icon" src={tick} alt="Lock Icon" />
              <span className="feature-text">Access to all basic features</span>
            </li>
            <li className="feature-item">
              <img className="feature-icon" src={tick} alt="Analytics Icon" />
              <span className="feature-text">Reporting and analytics</span>
            </li>
            <li className="feature-item">
              <img className="feature-icon" src={tick} alt="Users Icon" />
              <span className="feature-text">Up to 5 individual users</span>
            </li>
            <li className="feature-item">
              <img className="feature-icon" src={tick} alt="Chat Icon" />
              <span className="feature-text">Chat and email support</span>
            </li>
          </ul>
          <button className="plan-get">Get Started</button>
        </div>
        <div className="pricing-plan-b">
          <div className="pricing-plan-name">STANDARD</div>
          <div className="pricing-plan-price-b">
            $25<p className="month-b">/month</p>
          </div>
          <ul className="feature-list">
            <li className="feature-item">
              <img className="feature-icon" src={tick} alt="Lock Icon" />
              <span className="feature-text">Access to all basic features</span>
            </li>
            <li className="feature-item">
              <img className="feature-icon" src={tick} alt="Analytics Icon" />
              <span className="feature-text">Reporting and analytics</span>
            </li>
            <li className="feature-item">
              <img className="feature-icon" src={tick} alt="Users Icon" />
              <span className="feature-text">Up to 5 individual users</span>
            </li>
            <li className="feature-item">
              <img className="feature-icon" src={tick} alt="Chat Icon" />
              <span className="feature-text">Chat and email support</span>
            </li>
            <li className="feature-item">
              <img className="feature-icon" src={tick} alt="Chat Icon" />
              <span className="feature-text">3+ integrations</span>
            </li>
            <li className="feature-item">
              <img className="feature-icon" src={tick} alt="Chat Icon" />
              <span className="feature-text">Account performance reporting</span>
            </li>
          </ul>
          <button className="get-started-plan"> 
            Get Started </button>
        </div>

        <div className="pricing-plan-c">
          <div className="pricing-plan-name">BUSINESS</div>
          <div className="pricing-plan-price">
            $42<p className="month">/month</p>
          </div>
          <ul className="feature-list">
            <li className="feature-item">
              <img className="feature-icon" src={tick} alt="Lock Icon" />
              <span className="feature-text">Access to all basic features</span>
            </li>
            <li className="feature-item">
              <img className="feature-icon" src={tick} alt="Analytics Icon" />
              <span className="feature-text">Reporting and analytics</span>
            </li>
            <li className="feature-item">
              <img className="feature-icon" src={tick} alt="Users Icon" />
              <span className="feature-text">Up to 5 individual users</span>
            </li>
            <li className="feature-item">
              <img className="feature-icon" src={tick} alt="Chat Icon" />
              <span className="feature-text">Chat and email support</span>
            </li>
            <li className="feature-item">
              <img className="feature-icon" src={tick} alt="Chat Icon" />
              <span className="feature-text">3+ integrations</span>
            </li>
            
          </ul>
          <button className="plan-get">Get Started</button>
        </div>
      </div>
    </div>
  );
}


