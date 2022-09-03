import React, { useState, useEffect } from 'react'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Link } from "react-router-dom"
import heroImage from "../../assets/sweater.jpg"
import bannerImg from "../../assets/banner.jpg"
import Product from "../../components/Product/Product"
import "./home.css"

function Home() {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        async function fetchThreeProducts() {
            const response = await fetch('api/v1/users/products?direction=ASC&field=title&page=1&pagesize=3')
            const json = await response.json();
            setAllProducts(json);
        }
        fetchThreeProducts()
    }, [])

    const productArray = allProducts.map((product, index) => {
        return (
            <Link to={`/product/${product.id}`} key={index}>
                <Product product={product} />
                {/* estilos no product*/}
            </Link>
        )
    })

    return (
        <>
            <Header />

            <div className="home-hero">
                <div className="hero-body">
                    <h1 className="hero-body-title"><i>On Sale -50%</i></h1>
                    <p className="hero-body-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam soluta saepe et dolorem corporis numquam? Quaerat quod quae sapiente ullam magnam
                        consequuntur recusandae? Iste enim reprehenderit voluptatem ex laudantium ut?
                    </p>
                    <Link to="/productspage" className="hero-body-button">
                        View Products
                    </Link>
                </div>
                <img className="hero-image" src={heroImage} />
            </div>
            <div className='home-products'>
                <div className="product-image-container">
                    {productArray}
                </div>
            </div>
            <div className='banner-container'>
                <div className="banner-body">
                    <p className="banner-title"><i>Trending Now</i></p>
                    <Link to="/productspage" className="hero-body-button">
                        View Products
                    </Link>
                </div>
                <img className='banner-image' src={bannerImg} />
            </div>

            <Footer />
        </>
    )
}

export default Home