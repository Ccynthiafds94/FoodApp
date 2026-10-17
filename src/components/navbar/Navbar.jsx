import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState('Home');
  const navigate = useNavigate();

  const handleMenuClick = (name, path) => {
    setMenu(name);
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className='navbar'>
      <img src={assets.logo} alt='' onClick={() => handleMenuClick('Home', '/')} style={{ cursor: 'pointer' }} />
      <ul className='navbar-menu'>
        <li onClick={() => handleMenuClick('Home', '/')} className={menu === 'Home' ? 'active' : ''}>Home</li>
        <li onClick={() => handleMenuClick('Menu', '/')} className={menu === 'Menu' ? 'active' : ''}>Menu</li>
        <li onClick={() => handleMenuClick('Mobile', '/')} className={menu === 'Mobile' ? 'active' : ''}>Mobile App</li>
        <li onClick={() => handleMenuClick('Contact', '/contact')} className={menu === 'Contact' ? 'active' : ''}>Contact Us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='search' />
        <div className='navbar-seacrh-icon' onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>
          <img src={assets.basket_icon} alt='' />
          <div className='dot'></div>
        </div>
        <button>SignIn</button>
      </div>
    </div>
  );
};

export default Navbar;
