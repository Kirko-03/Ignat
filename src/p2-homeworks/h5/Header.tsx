import React from 'react'
import {NavLink} from 'react-router-dom'
import c from '../../p1-main/m1-ui/u1-app/App.module.css'

function Header() {
    const styleTD={textDecoration: "none"}
    return (
        <div className={c.skill} style={{listStyleType: 'none'}}>

            <div className={c.header} >
                <li><NavLink style={styleTD} activeClassName={c.activeClass} to={'/pre-junior'}>PreJunior</NavLink></li>
                <li><NavLink style={styleTD} activeClassName={c.activeClass} to={'/junior'}>Junior</NavLink></li>
                <li><NavLink style={styleTD} activeClassName={c.activeClass} to={'/pre-middle'}>PreMiddle</NavLink></li>
                <li><NavLink style={styleTD} activeClassName={c.activeClass} to={'/senior'}>Senior</NavLink></li>
                <div style={{color:"black",fontSize:'20px'}}>Pages</div>
            </div>
        </div>

    )
}

export default Header
