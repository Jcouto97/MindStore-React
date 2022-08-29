import React, { useState } from 'react'
import "./quantityButton.css"


/*
recebe prop de stock, n pode por + que isso ou 10 no cart~
se decrementar n pode ser - que 1
*/

function QuantityButton(props) {
  const { stock } = props;
  const { handleAddToUserCart } = props
  const [quantity, setQuantity] = useState(1)

  function handleDecrement() {
    console.log("decrementing")
    //se for 1 retorna (para n deixar que passe negativo), 
    //pq ja foi inicializado a 1 no state
    if (quantity === 1) {
      //envio para o product detail
      handleAddToUserCart(quantity)
      return;
    }
    //se nao for 1 decrementa de 1 em 1, porque sempre que
    //clique a funçao e chamada e verifica a condiçao em cima
    setQuantity(quantity - 1);
    handleAddToUserCart(quantity - 1);
  }

  function handleIncrement() {
    //stock para n poder por + do que o produto tem em stock
    if (quantity === stock || quantity === 10) {
      handleAddToUserCart(quantity)
      return;
    }
    setQuantity(quantity + 1);
    handleAddToUserCart(quantity + 1);
  }


  return (
    <div className='quantity-button'>
      <button className='quantity-button-decrement' onClick={handleDecrement}>-</button>
      <p className='quantity-button-number'>{quantity}</p>
      <button className='quantity-button-increment' onClick={handleIncrement}>+</button>
    </div>
  )
}

export default QuantityButton