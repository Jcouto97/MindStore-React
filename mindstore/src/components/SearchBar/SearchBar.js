import React, { useRef } from 'react'
import glass from "../../assets/search-bar.png"
import './searchbar.css'
//recebo a funçao handleSearch como prop da productpage e envio de volta o valor do search guardado em ref
//para poder processar la a logica 

function SearchBar({ handleSearch }) {
    const search = useRef()

    function searchProduct() {
        handleSearch(search)
    }

    return (
        <div className='search'>
            <label htmlFor="search">
                <input className='search' type="text" name="search" placeholder="Search" onChange={searchProduct} ref={search} />
            </label>
                <img src={glass} alt='search' className='search-glass' />
        </div>
    )
}

export default SearchBar