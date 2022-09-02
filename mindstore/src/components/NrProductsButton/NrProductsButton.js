import React from 'react'
//pq nao tenho de por aqui o css do outro?

function NrProductsButton(props) {
    const { productsPerPage, changeNrProducts } = props


    function handleDecrement() {
        if (productsPerPage !== 1) changeNrProducts(productsPerPage, -1);
    }

    function handleIncrement() {
        if (productsPerPage !== 10) changeNrProducts(productsPerPage, 1);
    }

    return (
        <div> PRODUCTS PER PAGE 
        <p></p>
        <div className='quantity-button'>
            <button className='quantity-button-decrement' onClick={handleDecrement}>-</button>
            <p className='quantity-button-number'>{productsPerPage}</p>
            <button className='quantity-button-increment' onClick={handleIncrement}>+</button>
        </div>
        </div>
    )
}

export default NrProductsButton