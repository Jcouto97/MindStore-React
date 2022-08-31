import React, { useState } from 'react'
import "./quantityButton.css"


/*
recebe prop de stock, n pode por + que isso ou 10 no cart~
se decrementar n pode ser - que 1
*/

function QuantityButton(props) {
  const { stock, productsToAdd } = props;
  const { handleAddToUserCart } = props

  function handleDecrement() {
    console.log("decrementing")
    //pq ja foi inicializado a 1 no state
    //num é o que esta depois da ,
    if (productsToAdd !== 1) handleAddToUserCart(productsToAdd, -1);
  }

  function handleIncrement() {
    //stock para n poder por + do que o produto tem em stock
    if (productsToAdd !== stock && productsToAdd !== 10) handleAddToUserCart(productsToAdd, 1);
  }


  return (
    <div className='quantity-button'>
      <button className='quantity-button-decrement' onClick={handleDecrement}>-</button>
      <p className='quantity-button-number'>{productsToAdd}</p>
      <button className='quantity-button-increment' onClick={handleIncrement}>+</button>
    </div>
  )
}

export default QuantityButton