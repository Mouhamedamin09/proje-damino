import React from "react"
import { Link, NavLink } from "react-router-dom"
import logo from '../public/Facebook_f_logo_(2019).svg.png'

export default function Header() {
  
    
    return (
        <header className="header">
            
            <div className='logo'>
            <Link className="site-logo" to="/">
                <img src={logo} alt='logo'  width={40}/>
                <h1 className='logo-text'>DAMINO</h1>
                </Link>
             </div>
            
            <nav>
                <NavLink 
                    to="/pricing"
                    
                >
                    Products
                </NavLink>
                <NavLink 
                    to="/about"
                
                >
                    About
                </NavLink>
                <NavLink 
                    to="/features"
                    
                >
                    Features
                </NavLink>
                <NavLink 
                    to="/login"
                    
                >
                    Login
                </NavLink>
                <NavLink 
                    to="/register"
                    
                >
                    Register
                </NavLink>
            </nav>
        </header>
    )
}