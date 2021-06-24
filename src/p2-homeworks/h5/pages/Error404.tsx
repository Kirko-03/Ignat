import React from 'react'
import s from '../../../p1-main/m1-ui/u1-app/App.module.css'
import {NavLink} from "react-router-dom";
function Error404() {
    return (
        <div className={s.error}>
            <li style={{listStyleType: 'none'}}>
            <div style={{border: '3px solid gray',borderRadius:'10px', background:'gray'}}>404 Page not found!</div>
            <NavLink to={'/pre-junior'}>Вернуться на начальную страницу </NavLink>
            </li>
            </div>

    )
    }

export default Error404
