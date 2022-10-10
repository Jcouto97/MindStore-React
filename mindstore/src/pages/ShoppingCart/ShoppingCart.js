import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from '../../components/Contexts/CartContext' //USECONTEXT
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CartProduct from '../../components/CartProduct/CartProduct'
import ProductDetails from '../ProductDetails/ProductDetails'
import arrowLeft from "../../assets/arrow-left.png"
import { Link } from "react-router-dom"

function Cart() {
  const userId = localStorage.getItem('userId');
  const fetchedToken = localStorage.getItem('token');
  // const [cartProducts, setCartProducts] = useState([])
  const { cartProducts, setCartProducts } = useContext(CartContext);

  /*
  fazer fetch ao endpoint que ve os produtos que estao no cart e outro para apagar produtos do cart?
  guardar todos em um state array, dar display ao array
  podemos ter um max de 10 artigos no cart, senao bloquear fetch e mostrar mensagem
  */


  useEffect(() => {
    const request = {
      method: "GET",
      headers: { "Content.Type": "application/JSON", "Authorization": fetchedToken },
    }

    async function fetchAllCartProducts() {
      const response = await fetch(`api/v1/users/shoppingcart/${userId}`, request)
      const data = await response.json();
      setCartProducts(data);
    }

    fetchAllCartProducts();
  }, []);

  console.log(cartProducts)

  const myCartArray = cartProducts.map((product, index) => {
    return (
      <CartProduct key={index} product={product} removeFromCart={removeFromCart} />
    )
  })

  function totalCartPrice() {
    if (cartProducts.length !== 0) {
      const pricesArray = cartProducts.map(product => product.price);
      return pricesArray.reduce((curr, acc) => curr + acc);
    }
  }


  async function removeFromCart(productId) {
    console.log("removing from cart")
    /* api/v1/users/removefromcart?userid=3&productid=40 */

    const request = {
      method: "PATCH",
      headers: { "Content.Type": "application/JSON", "Authorization": fetchedToken },
    }

    const response = await fetch(`api/v1/users/removefromcart?userid=${userId}&productid=${productId}`, request)
    const data = await response.json();
    setCartProducts(data);
  }

  return (
    <>
      <Header />
      <div className='cart-products-container' >
        <h2 className='cart-products-container-title'>Shopping Cart</h2>
        <Link className="product-detail-back" to="/productspage">
          <img src={arrowLeft} />
          <span>&nbsp;Back to Product List</span>
        </Link>
        {myCartArray === false ? <p>Your shoppingcart is empty :) </p> : null}
        {myCartArray}
      </div>
      <span className='cart-product-message-price'>Total: {totalCartPrice()}$
        &nbsp;</span>
      <button className='credentials-button' >Checkout</button>
    </>
  )
}

export default Cart