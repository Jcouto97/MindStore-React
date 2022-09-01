import React from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Map from "../../components/Map/Map";
import "./contacts.css";
import addressLogo from "../../assets/logo-address.png";
import emailLogo from "../../assets/logo-email02.png";

function Contacts() {


  return (
    <>
        <Header />
        <div className="contacts_main-container">

            <div className="contacts_text">
                <img src={addressLogo} alt="" />
                <div className="contacts_address">
                    <p className="contacts_text-1">Edifício Central, Via do Conhecimento</p>
                    <p>3830-352 Ílhavo</p>
                    <p>Ílhavo</p>
                </div>
            </div>

            <div className="contacts_email">
                <img src={emailLogo} alt="" />
                <p>bookstore@bookstore.com</p>
            </div>

            <div className="contacts_map">
                <Map />
            </div>

        </div>
        <Footer />
    </>
  )
}

export default Contacts