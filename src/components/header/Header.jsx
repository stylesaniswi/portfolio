import React from 'react'
import './header.css'
import Needs from './Needs'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Anish Shrestha</h1>
            <h5 className="text-light">Fullstack developer</h5>
            <Needs />
            <HeaderSocials />

            <div className="me">
                <img src={ME} alt="" />
            </div>
            <a href="#contact" className='scroll__down'>scroll down</a>
        </div>

    </header>
  )
}

export default Header