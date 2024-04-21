import React from 'react'

import '../style/style.css'

const Navigation = () => {
    return (
        <header>
            <nav className="navigation">
                <div className="logo">
                    <img src="../assets/logo.jpg" alt='logo' />
                </div>
                <ul>
                    <li href="#" >About</li>
                    <li href="#" >Contact Us</li>
                    <li href="#" >Career</li>
                </ul>
                <button className="btn-Login-popup">Login</button>
            </nav>
        </header>

    )
}

export default Navigation