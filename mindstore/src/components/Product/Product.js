import React from 'react'
import { useNavigate } from 'react-router-dom';
import starFull from "../../assets/star-full.png";
import "./product.css"

//recebe props de onde a componente for chamada (na home)
//RECEBE 2 TIPOS DE PROPS? (da pagelist tb)
function Product(props) {
  const { product } = props;

  //para qd clicar na component ir para o product details
  const navigate = useNavigate();

  return (
    <div className='productspage-product'>
      <div className="product-container" onClick={() => navigate(`/product/${product.id}`)}>
        <img src={product.image} className="product-image" alt='product pic' />
        <div className="product-rating">
          <p>{Math.round((product.rating.rate) * 10) / 10}</p>
          <img className='product-star' src={starFull} alt='star'/>
        </div>
        <div className="product-content">
          <p className="product-title">{product.title}</p>
          <p className="product-price">{product.price}$</p>
        </div>
      </div>
    </div>
  )
}

export default Product