import React from 'react'
import starFull from "../../assets/star-full.png";
import "./product.css"

//recebe props de onde a componente for chamada (na home)
//RECEBE 2 TIPOS DE PROPS? (da pagelist tb)
function Product(props) {
  const { product } = props;

  return (
    <div className="product-container">
      <img src={product.image} className="product-image" />
      <div className="product-rating">
        <p>{Math.round((product.rating.rate) * 10) / 10}</p>
        <img className='product-star' src={starFull} />
      </div>
      <div className="product-content">
        <p className="product-title">{product.title}</p>
        <p className="product-price">{product.price}$</p>
      </div>




    </div>
  )
}

export default Product