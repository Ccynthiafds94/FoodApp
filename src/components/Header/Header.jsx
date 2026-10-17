import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-contents">
                <h2>
                    Order Food Here
                </h2>
                <p>Choose your food by opening the menu</p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header
