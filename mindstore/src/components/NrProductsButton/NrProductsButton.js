import React from 'react'
import './NrProductsButton.css'

function NrProductsButton(props) {
    const { productsPerPage, changeNrProducts } = props


    function handleDecrement() {
        if (productsPerPage !== 1) changeNrProducts(productsPerPage, -1);
    }

    function handleIncrement() {
        if (productsPerPage !== 10) changeNrProducts(productsPerPage, 1);
    }

    return (
        <div className='products-per-page'>
            <p className='products-per-page-title' >Products per page:</p>
            <div className='quantity-button-perpage'>
                <button className='quantity-button-decrement' onClick={handleDecrement}>-</button>
                <p className='quantity-button-number'>{productsPerPage}</p>
                <button className='quantity-button-increment' onClick={handleIncrement}>+</button>
            </div>
        </div>
    )
}

export default NrProductsButton