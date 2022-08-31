import React, { useEffect, useRef, useState } from 'react'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Product from "../../components/Product/Product"
import "./productsPage.css"
import Sidebar from '../../components/Sidebar/Sidebar'

function ProductsPage() {

  const [products, setProducts] = useState([]);
  const [direction, setDirection] = useState("ASC");
  const [productsPerPage, setProductsPerPage] = useState(10)
  const [link, setLink] = useState(`?field=title&direction=`)
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState([])


  useEffect(() => {
    async function fetchProducts() {
      console.log(page)
      const response = await fetch(`api/v1/users/products${link}${direction}&page=${page}&pagesize=10`);
      const json = await response.json();
      console.log(json)
      setProducts(json)
    }
    fetchProducts();
    //estes para sempre que trocarem re render da pagina
  }, [direction, link, page])

  //paginaçao
  useEffect(() => {
    async function fetchNumPages() {
      const response = await fetch(`api/v1/users/products${link}ASC&page=1&pagesize=100`);
      const json = await response.json();
      //math ceil pq se nao arredondar para cima podem sobrar produtos e n aparecem
      const numPages = Math.ceil(json.length / productsPerPage)
      //para criar um array com posiçoes vazias para colocar os botoes
      setNumberOfPages(Array.from(Array(numPages)))
    }
    fetchNumPages();
  }, [link])

  const productArray = products.map(product => {
    {/* o link para o product esta no componente product mesmo */ }
    return (
      <Product key={product.id} product={product} />
    )
  }
  )

  function handleSort(event) {
    setDirection(event.target.value);
  }

  //que é enviada para os components
  function changeLink(link) {
    setLink(link)
  }

  return (
    <>
      <Header />
      <Sidebar handleSort={handleSort} changeLink={changeLink} />
      <div className='producstpage-container' >{productArray}</div>
      <div>
        {/*  a cada butao tenho que por onclick para mudar a pagina */}
        {numberOfPages.map((page, index) => <button key={index} onClick={() => {
          console.log(index + 1)
          setPage(index + 1)
        }} > {index + 1} </button>)}
      </div>
      <Footer />
    </>
  )
}

export default ProductsPage