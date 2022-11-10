import React from 'react'
import { useDispatch } from 'react-redux'
import { setIsOpen } from '../redux/slices/reviewSlice'
import logo from '../imgs/logo.png'
import face from '../imgs/face.png'
import twit from '../imgs/twit.png'
import inst from '../imgs/inst.png'

export default function Footer({rews}) {
    const dispatch = useDispatch()
    return (
        <footer className="footer">
            <div className="footer-content" id="cont">
                <div className="left-part">
                    <img src={logo} alt="logo" className="logo" />
                    <div className="foot-text">
                        Lorem ipsum dolor sit amet, consectetur adipin elit. A eleifend tristique condimentum vestibulum, ornare tortor viverra.
                    </div>
                </div>
                <div className="right-part">
                    <div className="rev-link" onClick={() => dispatch(setIsOpen())} style={{display: rews}}>Reviews</div>
                    <div className="messangers">
                        <a href="kk"><img src={inst} alt="" className="mess inst" /></a>
                        <a href="kk"><img src={face} alt="" className="mess face" /></a>
                        <a href="kk"><img src={twit} alt="" className="mess twit" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
