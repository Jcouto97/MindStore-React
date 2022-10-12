import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link, useParams } from "react-router-dom"
import arrowLeft from "../../assets/arrow-left.png"
import Rating from "../../components/Rating/Rating"
import QuantityButton from "../../components/QuantityButton/QuantityButton"
import "./productDetails.css"

function ProductDetails() {
    const { id } = useParams();
    // o react vai procurar no router product:id no url e associa

    const [product, setProduct] = useState({});

    //como rating é outro objeto tenho que guardar em state para poder desconstruir. PORQUE?
    const [productRating, setProductRating] = useState({});

    //state que vem do quantity button para ser usado no cart + tarde
    const [productsToAdd, setProductToAdd] = useState(1);
    const [isCartFull] = useState(false);

    useEffect(() => {
        /*  console.log(isCartFull
             )
         console.log(cartProducts.length) variavel do usecontext */
        async function fetchById() {
            const response = await fetch(`/api/v1/users/products/${id}`);
            const json = await response.json(); //problema aqui?
            setProduct(json);
            setProductRating(json.rating);
        }
        fetchById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //products to add vem da component button quantity
    function handleAddToUserCart(productsToAdd, num) {
        setProductToAdd(productsToAdd + num);
    }


    async function addToCart() {
        //variavel de context, caso esteja cheio
        /*  if (cartProducts.length >= 10) {
             setIsCartFull(true);
             return;
         } */

        const userId = localStorage.getItem("userId");
        const fetchedToken = localStorage.getItem("token");
        // console.log(fetchedToken);

        const productId = product.id;

        const request = {
            method: "PATCH",
            headers: { "Content.Type": "application/JSON", "Authorization": fetchedToken },
        }

        for (let i = 0; i < productsToAdd; i++) {
            const response = await fetch(`/api/v1/users/addtocart?userid=${userId}&productid=${productId}`, request);
            const data = await response.json();
            console.log("product added to cart ->", data)
        }
    }


    return (
        <>
            <Header />
            <div className="product-detail-container">
                <img className="product-detail-image" src={product.image} alt='product pic' />
                <div className="product-detail-content">
                    <Link className="product-detail-back" to="/productspage">
                        <img src={arrowLeft} alt='left arrow' />
                        <span>&nbsp;Back to Product List</span>
                    </Link>
                    <p className="product-detail-category">{(product.category)}</p>
                    <h1 className='product-detail-title'>{product.title}</h1>
                    <Rating className="product-detail-rating" productRating={productRating} />
                    <p className="product-detail-price">{product.price}$</p>
                    <p>Stock: {product.stock} </p>
                    <p className="product-detail-description">{product.description}</p>
                    <div className="product-detail-cart">
                        <QuantityButton productsToAdd={productsToAdd} stock={product.stock} handleAddToUserCart={handleAddToUserCart} />
                        {/* falta aqui funçoes handles para adicionar ao cart */}
                        <button className="hero-body-button" onClick={addToCart}>
                            Add to Cart
                        </button>
                    </div>
                    <>
                        {/* caso cart full manda esta mensagem */}
                        {isCartFull && <div>Cart is full (max 10 items)</div>}
                    </>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetails
