import React from 'react'
import "../App.css"
import Logo from "../image/favicon.png"
export default function Header() {
    return (
        <>
            <div className='nav'>
                <div className='navDiv'>
                    <img className='headerLogo' src={Logo} alt="logo" />
                </div>
                <div className='navDiv navLinkdiv'>
                    <ul className='navlinks'>
                        <li className='nav_link para'><a className='para link' href="/">Home</a></li>
                        <li className='nav_link '><a className='para link' href="/about">About Todo List</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
