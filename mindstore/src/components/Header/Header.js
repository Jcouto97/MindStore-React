import React from 'react'
import { Link } from "react-router-dom"
import "./header.css"


function Header() {
  return (
    <header className='header-container'>
        <nav className='header-nav'>
            <Link to='/' className='header-logo'>
                MindStore
            </Link>

            <div className='header-menu'>
                <Link to='/productspage' className='header-anchor'>
                    Products
                </Link>
                <Link to='/login' className='header-anchor'>
                    Login
                </Link>
                <Link to='/register' className='header-anchor'>
                    Register
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Header