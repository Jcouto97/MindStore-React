import React from 'react'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Link } from "react-router-dom"
import heroImage from "../../assets/sweater.jpg"
import productImg from "../../assets/jacket.jpg"
import bannerImg from "../../assets/banner.jpg"
import "./home.css"

function Home() {


    return (
        <>
        {/* para apagar */}
            <Header />
            <Link to="/product" >
                        Product
                    </Link>

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
                    <img className='product-image' src={productImg} />
                    <img className='product-image' src={productImg} />
                    <img className='product-image' src={productImg} />
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