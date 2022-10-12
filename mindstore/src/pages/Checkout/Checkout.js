import React, { useRef, useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./checkout.css";
import arrowLeft from "../../assets/arrow-left.png"
import mastercard from '../../assets/mastercard.png'
import paypal from '../../assets/paypal.png'
import santander from '../../assets/santander.png'
import { CartContext } from '../../Contexts/CartContext' //USECONTEXT

function Checkout() {
    const name = useRef("");
    const number = useRef("");
    const date = useRef("");
    const cvv = useRef("");

    const [rerender, setRerender] = useState(false);
    const [isRadioOn, setIsRadioOn] = useState(false);
    const [acceptButton, setAcceptButton] = useState(false);
    const { cartProducts, setCartProducts } = useContext(CartContext);
    const fetchedToken = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        console.log(number.current.value)
    }

    function handleInputTyped() {
        setRerender(!rerender);

        console.log(number.current.value.length)

        if (number.current.value.split(/[-\s]+/).join("").length === 4 || number.current.value.split(/[-\s]+/).join("").length === 8 || number.current.value.split(/[-\s]+/).join("").length === 12) {
            number.current.value += " - ";
        }

        if (date.current.value.length === 2) {
            date.current.value += " / ";
        }
    }

    const handleRadio = () => {
        setIsRadioOn(true);
    }

    async function removeFromCart(productId) {
        console.log("removing from cart")
        /* api/v1/users/removefromcart?userid=3&productid=40 */

        const request = {
            method: "PATCH",
            headers: { "Content.Type": "application/JSON", "Authorization": fetchedToken },
        }

        await fetch(`api/v1/users/removefromcart?userid=${userId}&productid=${productId}`, request)
    }

    const handlePay = () => {
        setAcceptButton(true);
        if (isRadioOn) {
            alert('Thank you for your payment. See you again soon! :)');
            //reset ao cart context
            cartProducts.forEach(element => {
                removeFromCart(element.id)
            });
            setCartProducts([]);
            console.log(cartProducts)

            setTimeout(() => {
                navigate("/shoppingcart");

            }, 1000);
        }

    }

    return (
        <>
            <Header />
            <div className="checkout-container">
                <div className="checkout-card">
                    <div className='payments'>
                        <img src={mastercard} alt='mastercard' className='payment' />
                        <img src={santander} alt='santander' className='payment' />
                        <img src={paypal} alt='paypal' className='payment' />
                    </div>
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
                        <div className="button-div">
                            <button onClick={handlePay} type='submit' className='btn button-accept'>Accept Payment</button>
                            <Link to="/shoppingcart">
                                <button type='submit' className='btn button-cancel'>Cancel</button>
                            </Link>
                        </div>
                    </form>
                    {(acceptButton && !isRadioOn) ? <p className='terms-message'>Please read and accept the terms of service before purchase</p> : <></>}
                    <label className="terms">
                        <input type="radio" required onChange={handleRadio} />
                        <p>I read and accept the terms of agreement</p>
                    </label>
                </div>
            </div>
            <div className='product-detail_link'>
                <Link to="/productspage" >
                    <img src={arrowLeft} alt="" />
                    <span>&nbsp; Back to Product List</span>
                </Link>
            </div>
            <Footer />
        </>
    )
}

export default Checkout;