import React from 'react';
import '../Styles/Integrations.css';
import wah from '../assests/wah.svg';
import image from '../assests/Integrations.webp';
import slack from '../assests/tools_icons/slack.svg';
import figma from '../assests/tools_icons/figma.svg';
import dropbox from '../assests/tools_icons/dropbox.svg';
import notion from '../assests/tools_icons/notion.svg';
import gmail from '../assests/tools_icons/gmail.svg';
import framer from '../assests/tools_icons/framer.svg';
import vimeo from '../assests/tools_icons/vimeo.svg';
import zoom from '../assests/tools_icons/zoom.svg';
import gitlab from '../assests/tools_icons/gitlab.svg';
import github from '../assests/tools_icons/github.svg';


function Integrations() {
  return (
    <section className='integration-container'>
        <div className='integration-box'>
            <div className='integrations'><img className='wah' src={wah}></img> INTEGRATIONS</div>
            <div className='integration-description'>Enable <span style={{color : '#FE8162'}}>integration </span> with<br/> other popular tools and <br /> platforms</div>
            <div className='integration-paragraph'>
                <p>Seamlessly connect and amplify your workflow<br /> by enabling integration with a diverse array of<br /> widely-used tools and platforms.</p>
            </div>
            <div className='integration-image'>
                <img className='integration-img' src={image} />
            </div>
        <div className='tools-icon'>
            <div className='slack'>
                <img classname='slack' src={slack}/> 
            </div>
            <div className='figma'>
                <img classname='figma' src={figma}/> 
            </div>
            <div className='dropbox'>
                <img classname='dropbox' src={dropbox}/> 
            </div>
            <div className='notion'>
                <img classname='notion' src={notion}/> 
            </div>
            <div className='gmail'>
                <img classname='gmail' src={gmail}/> 
            </div>
            <div className='vimeo'>
                <img classname='vimeo' src={vimeo}/> 
            </div>
            <div className='framer'>
                <img classname='framer' src={framer}/> 
            </div>
            <div className='zoom'>
                <img classname='zoom' src={zoom}/> 
            </div>
            <div className='gitlab'>
                <img classname='gitlab1' src={gitlab} width= '50'/> 
            </div>
            <div className='github'>
                <img classname='github' src={github} width= '50'/> 
            </div>
        </div>    
        </div>
    </section>
  )
}

export default Integrations