import React from "react";
import "../Styles/Testimonials.css";
import Emily from "../assests/Review_profile/Emily.webp";
import Sarah from "../assests/Review_profile/Sarah.webp";
import David from "../assests/Review_profile/David.webp";
import Alex from "../assests/Review_profile/Alex.webp";

function Testimonials() {
  return (
    <section id = "testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="t-button">
          <span style={{ fontSize: "18px" }}>🧡</span>TESTIMONIALS
        </div>
        <div className="t-heading">Hear from our <span style={{color : '#FE8162'}}>Satisfied</span> clients</div>
        <div className="t-paragraph">
          Discover why our clients love working with us. Read their
          <br />
          testimonials and learn how we has helped businesses.
        </div>
      </div>
      
      <div className="moving-row">
        <div className="t-row-container">
          <div className="t-review">
            "Manage Wise transformed our team's productivity. The intuitive
            interface and powerful features have made a significant impact on
            our daily operations"
          </div>
          <img  className="profile "src={Emily} />
          <div className="t-name">Emily</div>
          <div className="t-icon">Art Director</div>
        </div>
        <div className="t-row-container">
          <div className="t-review">
            "Using this product has been a game-changer for our team. The
            collaboration features and intuitive interface have greatly improved
            our productivity.
          </div>
          <img  className="profile "src={David} />
          <div className="t-name">David</div>
          <div className="t-icon">Freelancer</div>
        </div>
        <div className="t-row-container">
          <div className="t-review">
            "I can't imagine running my business without this product. The
            automation features have saved me hours of manual work, allowing me
            to focus on strategic tasks.
          </div>
          <img  className="profile "src={Alex} />
          <div className="t-name">Alex</div>
          <div className="t-icon">IT Manager</div>
        </div>
        <div className="t-row-container">
          <div className="t-review">
            "The customer support team behind this product is exceptional. They
            have been incredibly responsive and helpful, addressing any
            questions or concerns promptly.
          </div>
          <img  className="profile "src={Sarah} />
          <div className="t-name">Sarah</div>
          <div className="t-icon">Project Manager</div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
