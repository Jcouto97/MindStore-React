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

    useEffect(() => {
        async function fetchById() {
            const response = await fetch(`/api/v1/users/products/${id}`);
            const json = await response.json(); //problema aqui?
            console.log(json)
            setProduct(json);
            setProductRating(json.rating);
        }
        fetchById();
    }, []);

    //products to add vem da component button quantity
    function handleAddToUserCart(productsToAdd, num) {
        setProductToAdd(productsToAdd + num);
    }

    //Fazer aqui fetch para mandar para o cart + tarde
    function addToCart() {
        console.log("add to cart here")
    }

    return (
        <>
            <Header />
            <div className="product-detail-container">
                <img className="product-detail-image" src={product.image} />
                <div className="product-detail-content">
                    <Link className="product-detail-back" to="/productspage">
                        <img src={arrowLeft} />
                        <span>&nbsp;Back to Product List</span>
                    </Link>
                    <p className="product-detail-category">{(product.category)}</p>
                    <h1 className='product-detail-title'>{product.title}</h1>
                    <Rating className="product-detail-rating" productRating={productRating} />
                    <p>Stock: {product.stock} (apagar)</p>
                    <p className="product-detail-price">{product.price}</p>
                    <p className="product-detail-description">{product.description}</p>
                    <div className="product-detail-cart">
                        <QuantityButton productsToAdd={productsToAdd} stock={product.stock} handleAddToUserCart={handleAddToUserCart} />
                        {/* falta aqui funçoes handles para adicionar ao cart */}
                        <button className="hero-body-button" onClick={addToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetails


/* {
    "id": 4,
    "title": "High-waisted tailored trousers",
    "price": 749.99,
    "description": "A testimony to Valentino's impeccable tailoring, these trousers are all about sophistication. Crafted from virgin wool with a bit of stretch, the chocolate brown hue and pressed crease add a refined touch to the pair.",
    "category": "men's clothing",
    "image": "https://cdn-images.farfetch-contents.com/17/88/75/93/17887593_37953720_1000.jpg",
    "stock": 16,
    "rating": {
        "id": 4,
        "rate": 4.4,
        "count": 5
    }
} */