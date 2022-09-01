import React from 'react'
import "./cartproduct.css"

function CartProduct(props) {
    const { product, removeFromCart } = props;
    return (
        <div className="cart-product-container">
            <img className='cart-product-image' src={product.image} />
            <div className='cart-product-details'>
                <p className='cart-product-category' >{product.category}</p>
                <p className='cart-product-title' >{product.title}</p>
            </div>
            <p className='cart-product-price' >{product.price}$</p>
            <button className='cart-product-delete' onClick={() => removeFromCart(product.id)}>X</button>
           {/*  se nao tiver funçao que chama funçao parte  */}
        </div>
    )
}

export default CartProduct