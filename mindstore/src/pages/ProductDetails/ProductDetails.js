import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from "react-router-dom"


function ProductDetails() {
    // const { id } = useParams(); VEM DE ONDE? N DEVIA SER PROP?

    const [product, setProduct] = useState({});
    //como rating é outro objeto tenho que guardar em state para poder desconstruir. PORQUE?
    const [productRating, setProductRating] = useState({});

    useEffect(() => {
        async function fetchById() {
            const response = await fetch(`/api/v1/users/products/4`);
            const json = await response.json(); //problema aqui?
            console.log(json)
            setProduct(json);
            setProductRating(json.rating);
        }
        fetchById();
    }, []);

    return (
        <>
            <Header />
            <img src={product.image} />
            <Link to="/productspage">
                Back to Product List
            </Link>
            <div>{product.category}</div>
            <div>{product.title}</div>
            <div>estrelas aqui</div>
            <div>{productRating.rate} ({productRating.count})</div>
            <div>{product.price}</div>
            <div>{product.description}</div>

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