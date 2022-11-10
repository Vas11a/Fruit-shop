import React from 'react'
import Menu from './Menu'
import main from '../imgs/main-picture.png'
import {Link} from 'react-scroll'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            <Menu/>
            
            <div className="header-main">
                <div className="header-text">
                    <div className="head-up-title">fresh fruit for you</div>
                    <h1 className="head-title">Eat as you want</h1>
                    <div className="head-sub-title">Fruit and vegetables should be an important part of your daily diet. They are naturally good and contain vitamins and
                        minerals that can help to keep you healthy.</div>
                    <div className="head-butons">
                        <Link to='fruits' className="button button-green">Choose now</Link>
                        <NavLink to='cart' className="button button-white open-basket" style={{ color: 'black' }}>Basket</NavLink>
                    </div>
                </div>
                <div className="header-img">
                    <img src={main} alt="" className="head-img" />
                </div>
            </div>
            
        </header>
    )
}
