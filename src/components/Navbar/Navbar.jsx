import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logof.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar(props) {
  const { currentPath } = props;
  const Menu = currentPath;

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img id='imgslogo' src={logo} alt='logo.png' />
      </div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {menuOpen ? <CloseIcon/> : <MenuIcon/> }
      </div>

      <ul className={`nav-menu ${menuOpen ? 'mobile' : ''}`}>
        <li><Link to='/' onClick={()=>setMenuOpen(false)} style={{ textDecoration: 'none', color: Menu === '/' ? '#e95f35' : 'inherit' }}>Overview</Link></li>
        <li><Link to='/projects' onClick={()=>setMenuOpen(false)}style={{ textDecoration: 'none', color: Menu === '/projects' ? '#e95f35' : 'inherit' }}>Projects</Link></li>
        <li><Link to='/activity' onClick={()=>setMenuOpen(false)} style={{ textDecoration: 'none', color: Menu === '/activity' ? '#e95f35' : 'inherit' }}>Activity</Link></li>
        <li><Link to='/feedback' onClick={()=>setMenuOpen(false)} style={{ textDecoration: 'none', color: Menu === '/feedback' ? '#e95f35' : 'inherit' }}>Others</Link></li>
      </ul>

      <div className='contact-btn'>
        <a href='https://www.instagram.com/surya_____sol/'><button className='button-org'>Fast Contact</button></a>
      </div>
    </div>
  );
}

export default Navbar;
