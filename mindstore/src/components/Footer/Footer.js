import React, { useState, useEffect } from 'react'
import "./footer.css"
import { Link, useLocation } from "react-router-dom"

function Footer() {
    //para ver se footer absoluto (fica em baixo) ou nao, nas paginas sem scroll é absoluto
    const location = useLocation();
    const[isFooterAbsolute, setIsFooterAbsolute] = useState(false)

    //assim corre sempre que o footer é chamado
    useEffect(() => {
        if(location.pathname === "/login" ||
        location.pathname === "/register" ||
        location.pathname === "/contacts" ||
        location.pathname === "/profile"){
            setIsFooterAbsolute(true)
        }
    }, [])

    return (
        <footer className={isFooterAbsolute ? "absolute-footer-container" : "footer-container"}>
            <div className="footer-content">
                <div className="footer-logo">MindStore</div>
                <div className="footer-year">
                    © 2022 All Rights Reserved
                </div>
                <Link to="/contacts" className="footer-contacts">
                    Contacts
                </Link>
            </div>
        </footer>
    )
}

export default Footer