import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import c from '../../p1-main/m1-ui/u1-app/App.module.css'

function Header() {
    const [click, setClick] = useState(false)
    return (
        <div className={c.skill} style={{listStyleType: 'none'}}>
            <div onClick={() => setClick(!click)} style={{textAlign: 'left'}}>Pages</div>
            {click ?
                <div className={c.navbar}>
                    <li><NavLink activeClassName={c.activeClass} to={'/pre-junior'}>Junior</NavLink></li>
                    <li><NavLink activeClassName={c.activeClass} to={'/junior'}>Junior++</NavLink></li>
                    <li><NavLink activeClassName={c.activeClass} to={'/error'}>error</NavLink></li>
                </div> : ''}
        </div>

    )
}

export default Header
