import React from 'react'
import logo from '../imgs/logo.png'
import burg from '../imgs/burg.png'
import burgout from '../imgs/burgout.png'
import {Link} from 'react-scroll'


export default function Menu() {
    const [menu, setMenu] = React.useState(false)
    const menuList = ['Home', 'Health', 'Fruits','Rewiews']
    const linkList = ['/', 'heals', 'fruits','rew']
    return (
        <>
            <nav className={`nav ${menu ? 'show' : ''}`}>
                <img src={logo} alt="logo" className="logo" />
                <div className="block-nav">
                    {
                        menuList.map((elem,idx) => <Link
                            to={linkList[idx]} 
                            style={{cursor: 'pointer'}}
                            key={idx}
                            className="part"
                            onClick={() => menu ? setMenu(false) : null}
                            >{elem}</Link>)
                    }
                </div>

                <Link to='cont' className="button button-green">
                    Contacts
                </Link>

            </nav>
            <div className="burger-menu" onClick={() => setMenu(menu ? false : true)}>
                <img src={burg} alt="" className={`burg ${menu ? 'hide' : ''}`} />
                <img src={burgout} alt="" className={`burgout ${menu ? '' : 'hide'}`} />
            </div>
        </>
    )
}
