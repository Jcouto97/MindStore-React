import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext' //USECONTEXT
import Header from '../../components/Header/Header'
import CartProduct from '../../components/CartProduct/CartProduct'
import arrowLeft from "../../assets/arrow-left.png"
import emptyCart from "../../assets/empty-cart-image.png"
import { Link } from "react-router-dom"
import './cart.css'



function Cart() {
  const userId = localStorage.getItem('userId');
  const fetchedToken = localStorage.getItem('token');
  const [cartPrice, setCartPrice] = useState(0);
  const { cartProducts, setCartProducts } = useContext(CartContext); //VARIAVEL DO CONTEXT PARA BLOQUEAR CASO QUEIRA ADICIONAR + PRODUCTS NO CART MAX 10

  useEffect(() => {
    const request = {
      method: "GET",
      headers: { "Content.Type": "application/JSON", "Authorization": fetchedToken },
    }

    async function fetchAllCartProducts() {
      const response = await fetch(`api/v1/users/shoppingcart/${userId}`, request)
      const data = await response.json();
      setCartProducts(data);
      totalCartPrice(data);
    }

    fetchAllCartProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(cartProducts)

  const myCartArray = cartProducts.map((product, index) => {
    return (
      <CartProduct key={index} product={product} removeFromCart={removeFromCart} />
    )
  })

  function totalCartPrice(data) {
    if (data.length !== 0) {
      const pricesArray = data.map(product => product.price);
      const cartPrice = pricesArray.reduce((curr, acc) => curr + acc);
      setCartPrice(cartPrice)
    } else {
      setCartPrice(0)
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
    totalCartPrice(data);
  }

  return (
    <>
      <Header />
      <div className='cart-products-container' >
        <h2 className='cart-products-container-title'>Shopping Cart</h2>
        {myCartArray}
        <p></p>
        <div className='price-container'>
          {!cartPrice ?
            <>
              <img src={emptyCart} alt='empty cart' className='empty-cart' />
              <p className='empty-message'>Cart is Empty</p>
            </> :
            <Link to='/checkout' className='header-anchor'>
              <button className='credentials-button' >Checkout</button>
            </Link>
          }
          <span className='cart-product-message-price'>Total: {cartPrice}$
            &nbsp;</span>
        </div>
        <p></p>
        <Link className="product-detail-back" to="/productspage">
          <img src={arrowLeft} alt='arrow left' />
          <span>&nbsp;Back to Product List</span>
        </Link>
      </div>
    </>
  )
}

export default Cart