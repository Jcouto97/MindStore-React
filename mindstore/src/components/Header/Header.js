import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import ShoppingCart from "../../assets/shopping-cart.png"
import "./header.css"


function Header() {
    //para navegar, hook
    const navigate = useNavigate()

    const loginToken = localStorage.getItem('token');

    function handleLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        navigate('/');
    }


    return (
        <>
            {loginToken === null ?

                <header className='header-container'>
                    <nav className='header-nav'>
                        <Link to='/' className='header-logo'>
                            Mind<span className='header-bold'>Store</span>
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

                :

                <header className='header-container'>
                    <nav className='header-nav'>
                        <Link to='/' className='header-logo'>
                            Mind<span className='header-bold'>Store</span>
                        </Link>

                        <div className='header-menu'>
                            <Link to='/productspage' className='header-anchor'>
                                Products
                            </Link>
                            <Link to='/profile' className='header-anchor'>
                                Profile
                            </Link>
                            <Link to='/shoppingcart' className='header-anchor'>
                                <img src={ShoppingCart} alt='shopping cart' />
                            </Link>
                            <button className='sign-out' onClick={handleLogout}>
                                Sign Out
                            </button>
                        </div>
                    </nav>
                </header>

            }
        </>
    )
}

export default Header