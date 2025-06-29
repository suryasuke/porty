import React from 'react'
import './Footer.css'
import data from '../../assets/data'



import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {

  return (
    <div className='footer'>
            <ul className='footer-links'>
                <li>About</li>
                <li>Contact</li>
                <li>Location</li>
                <li>Mail</li>
            </ul>
            <div className='footer-social-icon'>
                 <div className='footer-icons-container'>
                  <a href='https://www.instagram.com/surya_____sol/'><InstagramIcon color='black'/></a>
                    
                 </div>
                 <div className='footer-icons-container'>
                 <a href={`https://wa.me/8110974040?text=${data.content}`}> <WhatsAppIcon color='black'/></a>  
                 
                 </div>
                 <div  className='footer-icons-container'>  
                           <a href={`www.linkedin.com/in/surya-s-99b922272`}> <LinkedInIcon color='black'/></a> 
                 </div>
                  <div  className='footer-icons-container'>  
                           <a href={`https://github.com/suryasuke/`}> <GitHubIcon color='black'/></a> 
                 </div>
            </div>
            <div className='footer-copyright'>
              
                <p>copyright @2024 -All Rights Reserved</p>
            </div>
           </div>
  )
}
export default Footer
