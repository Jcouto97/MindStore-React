import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./checkout.css";
import arrowLeft from "../../assets/arrow-left.png"

function Checkout() {
    const name = useRef("");
    const number = useRef("");
    const date = useRef("");
    const cvv = useRef("");

    const [rerender, setRerender] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(number.current.value)
    }

    function handleInputTyped() {
        setRerender(!rerender);

        console.log(number.current.value.length)
        console.log(number)

        if (number.current.value.split(/[-\s]+/).join("").length === 4 || number.current.value.split(/[-\s]+/).join("").length === 8 || number.current.value.split(/[-\s]+/).join("").length === 12) {
            number.current.value += " - ";
        }

        if (date.current.value.length === 2) {
            date.current.value += " / ";
        }
    }

    return (
        <>
            <Header />
            <div className='product-detail_link'>
                <Link to="/productspage" >
                    <img src={arrowLeft} alt="" />
                    <span>&nbsp; Back to Product List</span>
                </Link>
            </div>
            <div className="checkout-container">
                <div className="checkout-card">
                    <div className="card-number">
                        <p className="card-number_title">Card Number</p>
                        <p className="card-number_input">{number.current.value}</p>
                    </div>

                    <div className="card-info">
                        <div className="card-info_name">
                            <p className="name-placeholder">Name</p>
                            <p className="name">{name.current.value}</p>
                        </div>

                        <div className="card-info_date">
                            <p className="date-placeholder">Exp Date</p>
                            <p className="date">{date.current.value}</p>
                        </div>

                        <div className="card-info_cvv">
                            <p className="cvv-placeholder">CVV</p>
                            <p className="cvv">{cvv.current.value}</p>
                        </div>
                    </div>
                </div>

                <div className="checkout-form">
                    <h3 className='page-title'>Payment Details</h3>

                    <form onSubmit={handleSubmit} className='payment-form'>
                        <label htmlFor="name">
                            <span>Cardholder Name</span>
                            <input type="text" placeholder='Joaquim Alberto' maxLength={18} ref={name} onChange={handleInputTyped} />
                        </label>

                        <label htmlFor="number">
                            <span>Card Number</span>
                            <input type="text" placeholder='4242 4242 4242 4242' maxLength={25} ref={number} onChange={handleInputTyped} />
                        </label>

                        <label htmlFor="date">
                            <span>Exp Date</span>
                            <input type="text" placeholder='07 / 2026' maxLength={9} ref={date} onChange={handleInputTyped} />
                        </label>

                        <label htmlFor="cvv">
                            <span>CVV</span>
                            <input type="text" placeholder='424' maxLength={3} ref={cvv} onChange={handleInputTyped} />
                        </label>
                        <label>
                            <input className='terms' type="radio" name="terms" value="terms" id="terms" required />
                            I accept the terms of agreement
                        </label>
                        <div className="button-div">
                            <Link to="/shoppingcart">
                                <button type='submit' className='btn button-cancel'>Cancel</button>
                            </Link>
                            <button type='submit' className='btn button-accept'>Accept Payment</button>
                        </div>
                    </form>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout;