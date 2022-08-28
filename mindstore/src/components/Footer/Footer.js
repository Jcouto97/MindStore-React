import React from 'react'
import "./footer.css"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-logo">MindStore</div>
                <Link to="/contacts" className="footer-contacts">
                    Contacts
                </Link>
                <div className="footer-year">
                    © 2022. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer