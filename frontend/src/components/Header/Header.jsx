import React from 'react'
import './header.css'
import { assets } from '../../assets/assets'

const Header = () => {
    const scrollToMenu = () => {
        const menuSection = document.getElementById('explore-menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <div className='header'>
                <div className="header-contents">
                    <h2>
                        Order Food Here
                    </h2>
                    <p>Choose your food by opening the menu</p>
                    <button onClick={scrollToMenu}>View Menu</button>
                </div>
            </div>

            <div className='mobile-app-section' id='mobile-app'>
                <div className='mobile-app-text'>
                    <p className='mobile-app-tag'>Mobile App</p>
                    <h3>Get the food app and enjoy exclusive deals</h3>
                    <p>Order faster, track live delivery, and stack rewards with every order.</p>
                </div>
                <div className='mobile-app-store'>
                    <img src={assets.app_store} alt='App Store' />
                    <img src={assets.play_store} alt='Google Play' />
                </div>
            </div>
        </>
    )
}

export default Header
