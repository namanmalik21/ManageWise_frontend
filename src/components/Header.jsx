import React,{ useState } from 'react';
import image1 from '../assests/Dashboard-img.webp';
import image2 from '../assests/right-arrow.svg';
import image3 from '../assests/small-round-play-button.png';

import '../Styles/Header.css';

function Header() {
  const[showIcon, setShowIcon] = useState(false);

    const handleGetStartedHover = () => {
        setShowIcon(true);
    }
    const handleGetStartedLeave = () => {
       setShowIcon(false);
    
    }

    
    return (
    <div className='container'>
        <div clasName='hand'></div>
        <div className='welcome'><span style={{ fontSize: '19px' }}>👋 </span>WELCOME TO MANAGE WISE!</div>
        
        <div class="text-container">
        <div>Empower your business with</div>
        <div><span style={{color : '#FE8162'}}>Strategic </span>insights</div>
        </div>
         
        <div class="paragraph-container">
        <p>Powerful management platform designed to streamline your business <br />  operations, boost productivity, and drive success</p>
        </div>
        
        <div className="button-row">
         <button className="get-started-button" onMouseEnter={handleGetStartedHover} onMouseLeave={handleGetStartedLeave}>
            Get Started {showIcon && (<img src={image2} alt="Icon" className="icon-placeholder" />)}
         
         </button>
        <button className="watch-demo-button">Watch Demo <img className='play-button' src={image3} /></button>
        </div>

        <div className="image-container">
            <img className= 'header-image' src={image1} />
         </div>
        
    </div>
  );
}

export default Header