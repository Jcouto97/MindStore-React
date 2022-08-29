import React from 'react'
import starFull from "../../assets/star-full.png";

//recebe props de onde a componente for chamada (na home)
//RECEBE 2 TIPOS DE PROPS? (da pagelist tb)
function Product(props) {
  const { product } = props;

  return (
    <div className="product-container">
      <img src={product.image} className="product-image" />
      <div className="product-rating">
        <p>{Math.round((product.rating.rate) * 10) / 10}</p>
        <img src={starFull} />
      </div>
      <div className="product-content">
        <p children="product-title">{product.title}</p>
        <p children="product-price">{product.price}</p>
      </div>




    </div>
  )
}

export default Product