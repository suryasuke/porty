import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logof.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { useDispatch, useSelector } from 'react-redux';
import { toggleUp } from '../redux/toggleSlice';
import { ChangePorfileView } from '../redux/profileViewToggle';

function Navbar({ currentPath }) {
  const Menu = currentPath;
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle.toggle);
 const value = useSelector(state => state.profileView.toggle);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleclick = ()=>{
    dispatch(ChangePorfileView());
  }
  const handleToggleClick = () => {
    setAnimating(true); 

    setTimeout(async () => {
      dispatch(toggleUp()); 
      setAnimating(false); 
    }, 300); 
  };

  console.log( "profile value in navbar" , value);
  
  return (
    <div className={`nav-cont`}>
      <div className='navbar'>
        <div className='nav-left'>
 <div className='nav-logo'>
          <img onClick={()=> {handleclick()}} id='imgslogo' src={logo} alt='logo.png' /> 
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {menuOpen ? <CloseIcon style={{ color: 'black' }} /> : <MenuIcon style={{ color: 'black' }} />}
        </div>

        <div>
          <ul className={`nav-menu ${menuOpen ? 'mobile' : ''}`}>
            <li><Link to='/' onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: Menu === '/' && '#e95f35' }}>Overview</Link></li>
            <li><Link to='/projects' onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: Menu === '/projects' && '#e95f35' }}>Projects</Link></li>
            <li><Link to='/activity' onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: Menu === '/activity' && '#e95f35'  }}>Activity</Link></li>
            <li><Link to='/feedback' onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: Menu === '/feedback' && '#e95f35' }}>Others</Link></li>
          </ul>
        </div>
        </div>
       

        <div className='contact-btn'>
          <a href='https://www.instagram.com/suryashanuh/'>
            <button className='button-org'>Fast Contact</button>
          </a>

          <button onClick={handleToggleClick} className='tgl-btn'>
            <span className={`icon-wrapper ${animating ? 'icon-exit' : 'icon-enter'}`}>
              {toggle ? <LightModeIcon /> : <BedtimeIcon />}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
