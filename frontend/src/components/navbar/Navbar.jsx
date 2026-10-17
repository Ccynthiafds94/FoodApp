import { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = () => {
  const [menu, setMenu] = useState('Home');
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { cartCount, searchQuery, setSearchQuery } = useContext(StoreContext);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuClick = (name, path, sectionId) => {
    setMenu(name);

    if (path) {
      navigate(path);
    }

    setTimeout(() => scrollToSection(sectionId || 'home'), 100);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      setMenu('Menu');
      if (window.location.pathname !== '/') navigate('/');
      setTimeout(() => scrollToSection('food-display'), 100);
    }
  };

  return (
    <div className='navbar'>
      <img src={assets.logo} alt='' onClick={() => handleMenuClick('Home', '/', 'home')} style={{ cursor: 'pointer' }} />
      <ul className='navbar-menu'>
        <li onClick={() => handleMenuClick('Home', '/', 'home')} className={menu === 'Home' ? 'active' : ''}>Home</li>
        <li onClick={() => handleMenuClick('Menu', '/', 'explore-menu')} className={menu === 'Menu' ? 'active' : ''}>Menu</li>
        <li onClick={() => handleMenuClick('Mobile', '/', 'mobile-app')} className={menu === 'Mobile' ? 'active' : ''}>Mobile App</li>
        <li onClick={() => handleMenuClick('Contact', '/contact', 'contact')} className={menu === 'Contact' ? 'active' : ''}>Contact Us</li>
      </ul>
      <div className='navbar-right'>
        {searchOpen && (
          <input
            className='navbar-search-input'
            type='search'
            placeholder='Search dishes'
            value={searchQuery}
            onChange={handleSearchChange}
            autoFocus
            aria-label='Search dishes'
          />
        )}
        <button
          className='navbar-search-button'
          type='button'
          onClick={() => {
            setSearchOpen((isOpen) => !isOpen);
            if (searchOpen) setSearchQuery('');
          }}
          aria-label={searchOpen ? 'Close search' : 'Search dishes'}
        >
          <img src={assets.search_icon} alt='' />
        </button>
        <div className='navbar-seacrh-icon' onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>
          <img src={assets.basket_icon} alt='' />
          {cartCount > 0 && <span className='cart-count'>{cartCount}</span>}
        </div>
        <button onClick={() => navigate('/login')}>SignIn</button>
      </div>
    </div>
  );
};

export default Navbar;
