import React, { useEffect, useState } from 'react'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Product from "../../components/Product/Product"

function ProductsPage() {

  const[products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("api/v1/users/products?direction=DESC&field=title&page=1&pagesize=3");
      const json = await response.json();
      setProducts(json)
    }
    fetchProducts();
  }, [])

  const productArray = products.map(product => {
    return (
      <Product key={product.id} product={product}/>
    )
  }
    )

  return (
    <>
      <Header />
      <div>{productArray}</div>
      <Footer />
    </>
  )
}

export default ProductsPage