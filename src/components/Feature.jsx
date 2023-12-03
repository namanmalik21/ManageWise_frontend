import React from 'react'
import star from '../assests/star-2768.svg'
import '../Styles/Feature.css';
import webimg from '../assests/website-image.webp';
import bottom1 from '../assests/Bottom-image1.webp';
import bottom2 from '../assests/Bottom-image2.webp';
import bottom3 from '../assests/Bottom-image3.webp';

function Feature() {
  return (
<section id='features' className='feature-container'>
    <div className='features'>
          <div className='premier-feature'><span style={{ fontSize: '19px' }}>🔥</span>PREMIER FEATURES</div>
         
          <div className="text1-container">
            <div>Discover our product's <span style={{color : '#FE8162'}}>Capabilities</span></div>
          </div>
        
        <div className="paragraph1">
          <p>Don't settle for mediocrity - embrace the future of management <br /> with Manage Wise.</p>
        </div>
        
        <div className="whole-container">
         <div className="left-container">

            <img className='star' src={star}  />
            <div className='paragraph2'>

                <p>Boost productivity and <br />streamline workflow with <br />us. Enjoy our intuitive <br />interface and robust <br />features.</p>

            </div>
            
         </div>
        
         <div className='right-container'>
            <img className='web-image' src={webimg} />
            <p className='feature-1'>Smart Task Management</p>
            <p className='feature-1-description'>Say goodbye to chaos with our smart task management system</p>
        </div>
        </div>

        <div className='row-container'>
 
            <div className='bottom-feature-container'>
             <img className='bottom-img' src = {bottom1} />  
             <p className='bottom-feature'>Flexible Scheduling</p>
             <p className='bottom-description'>Stay productive with our flexible scheduling system</p>
             </div>
             
             <div className='bottom-feature-container'>
             <img className='bottom-img' src = {bottom2} />  
             <p className='bottom-feature'>Easy Communication</p>
             <p className='bottom-description'>Collaborate seamlessly with your team in real-time</p>
             </div>
             
             <div className='bottom-feature-container'>
             <img className='bottom-img' src = {bottom3} />  
             <p className='bottom-feature'>Analytics</p>
             <p className='bottom-description'>Gain valuable insights with our advanced analytics feature</p>
             </div>
        </div>


    </div>
        

</section>
  )
}

export default Feature