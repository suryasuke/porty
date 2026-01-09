import React from 'react'
import './Footer.css'
import data from '../../assets/data'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FuzzyText from '../../ui/FuzzyText';
import sign from '../../assets/sign1.png'   

export const Footer = () => {

  return (
    <div className='foot-c'>
 <div className='footer-left'>
            <ul className='footer-links'>
                <li>About</li>
                <li>Contact</li>
                <li>Location</li>
                <li>Mail</li>
            </ul>
            <div className='footer-social-icon'>
                 <div className='footer-icons-container'>
                  <a href='https://www.instagram.com/suryashanuh/'><span><InstagramIcon color='black'/></span></a>
                    
                 </div>
                 <div className='footer-icons-container'>
                 <a href={`https://wa.me/8110974040?text=${data.content}`}> <span><WhatsAppIcon color='black'/></span></a>  
                 
                 </div>
                 <div  className='footer-icons-container'>  
                           <a href={`https://www.linkedin.com/in/surya-s-99b922272`}><span><LinkedInIcon color='black'/></span> </a> 
                 </div>
                  <div  className='footer-icons-container'>  
                           <a href={`https://github.com/suryasuke/`}> <span><GitHubIcon color='black'/></span></a> 
                 </div>
            </div>
            <div className='footer-copyright'>
              
                <p>copyright @2024 -All Rights Reserved</p>
            </div>
           </div>
           <div className='footer-right'>
            <FuzzyText
             baseIntensity={0.2} 
             hoverIntensity={0.5} 
             enableHover={true}
             clickEffect={true}
             fontSize='50px'
             className='developedby'
            >
              Developed by
            </FuzzyText>
           <img src={sign} alt='sign'/>
           </div>
           

    </div>
   
  )
}
export default Footer
