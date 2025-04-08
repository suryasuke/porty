import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'

import logo from '../../assets/logof.png'
function Navbar(props) {

  const {currentPath} =props ; 

  const Menu = currentPath ; 

   console.log(Menu);

  
  
  return (
    <div className='navbar'>
    <div className='nav-logo'>

       
   <img id='imgslogo' src={logo} alt='logo.png'/>
    </div>
    <ul className='nav-menu'>
        <li><Link  style={{textDecoration: 'none', color: Menu === '/' ? '#e95f35' : 'inherit' }}  to='/'>Overview</Link></li>
        <li><Link  style={{textDecoration: 'none', color: Menu === '/projects' ? '#e95f35' : 'inherit '  }} to='/projects' > Projects </Link></li>
        <li><Link  style={{textDecoration: 'none', color: Menu === '/activity' ? '#e95f35' : 'inherit' }} to='/activity' > Activity </Link></li>
        <li><Link style={{textDecoration: 'none', color: Menu === '/feedback' ? '#e95f35' : 'inherit' }} to='/feedback' > Others </Link></li>
         
   </ul>
   <div>
    <a href='https://www.instagram.com/surya_____sol/'><button className='button-org'>Fast Contact</button></a>
   </div>
   

</div>
  );
}

export default Navbar  ; 
