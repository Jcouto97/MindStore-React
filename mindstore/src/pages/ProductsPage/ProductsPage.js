import React, { useEffect, useState } from 'react'
import Header from "../../components/Header/Header"
import Product from "../../components/Product/Product"
import Sidebar from '../../components/Sidebar/Sidebar'
import SearchBar from '../../components/SearchBar/SearchBar'
import "./productsPage.css"

function ProductsPage() {

  const [products, setProducts] = useState([]);
  const [direction, setDirection] = useState("ASC");
  const [productsPerPage, setProductsPerPage] = useState(10)
  const [link, setLink] = useState(`?field=title&direction=`)
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`api/v1/users/products${link}${direction}&page=${page}&pagesize=${productsPerPage}`);
      const json = await response.json();
      setProducts(json)
    }
    fetchProducts();
    //estes para sempre que trocarem re render da pagina
  }, [direction, link, page, productsPerPage])

  //ir buscar o nr de produtos para a paginaçao
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
  }, [link, productsPerPage])

  const productArray = products.map(product => {
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
    setLink(link);
  }

  //botao para diminuir e aumentar produtos por pagina
  function changeNrProducts(productsPerPage, num) {
    setProductsPerPage(productsPerPage + num);
  }

  //search

  async function handleSearch(search) {
    const response = await fetch("api/v1/users/products?direction=DESC&field=title&page=1&pagesize=40")
    const data = await response.json();

    const dataArray = data.filter(product => product.title.toLowerCase().includes((search.current.value).toLowerCase()))
    setProducts(dataArray);
  }


  return (
    <>
      <Header />
      <div className="products-page-container">
        <div className="products-page-search-sidebar">
          <SearchBar handleSearch={handleSearch} />
          <Sidebar className="sidebar" handleSort={handleSort} changeLink={changeLink} changeNrProducts={changeNrProducts} productsPerPage={productsPerPage} />
        </div>
        <div className="products-grids-pagination">
          <div className='producstpage-container' >{productArray}</div>
          <div className='products-pagination' >
            {/*  a cada butao tenho que por onclick para mudar a pagina */}
            {numberOfPages.map((page, index) => <button className='pagination-button' key={index} onClick={() => {
              setPage(index + 1)
            }} > {index + 1} </button>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsPage