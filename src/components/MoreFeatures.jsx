import React from 'react';
import '../Styles/MoreFeatures.css';
import fire from '../assests/Fire.svg';
import bell from '../assests/bell.svg';
import phone from '../assests/phone.svg';

function MoreFeatures() {
  return (
    <section className='moreFeatures'>
        <div className='More-features-container'>
            <div className='And-More'><span style={{ fontSize: '19px' }}>🤩 </span>AND MORE...</div>
            
            <div class="More-features-heading">
            <div>Explore an array of features that elevate your <br /></div>
            <div><span style={{color : '#FE8162'}}>Productivity </span>to new heights</div>
            </div>
            
            <div class="more-features-paragraph">
            <p>Discover the tools that will revolutionize the way you <br /> manage and optimize your operations</p>
            </div>

            <div className='row1-container'>
                <div className='moreFeature1'>
                    <img className='icons' src={phone} />
                    <div className='morefeatures-cross' >Cross-Platform<br /> Compatibility</div>
                    <div className='morefeatures-paragraph'>Enjoy the flexibility of cross-platform< br /> compatibility. Our product works< br /> seamlessly across desktop, web, and< br /> mobile devices, allowing you to work< br /> from your preferred device</div>
                </div>
                
                <div className='moreFeature2'>
                    <img className='icons' src={bell} />
                    <div className='morefeatures-name'>Stay Informed with Essential<br /> Notifications</div>
                    <div className='morefeatures-paragraph'>Automate support from first customer< br /> contact to closing the ticket. Drastically< br /> improve time to resolution.Automate < br />support from first customer contact to < br />closing the ticket.</div>
                </div>
                
                <div className='moreFeature3'>
                    <img className='icons' src={fire} />
                    <div className='morefeatures-name'>Secure Data Encryption at<br />all times</div>
                    <div className='morefeatures-paragraph'>Trust in our robust data encryption to< br /> keep your sensitive information safe and < br />secure. Rest easy knowing your data is < br />protected at all times.</div>
                </div>

            </div>





        
       
        </div>

         
        
    </section>
  )
}

export default MoreFeatures