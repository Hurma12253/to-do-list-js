import React from 'react'
import './Header.scss'

function Header() {
    return (
        <div className='header'>
            <div className="header__logo">To do list</div>
            <div className="header__nav">
                <div className="header__nav__item">Do</div>
                <div className="header__nav__item">Anything</div>
                <div className="header__nav__item">Lol</div>
            </div>
        </div>
    )
}

export default Header
