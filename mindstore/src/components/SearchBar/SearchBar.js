import React, { useRef } from 'react'

//recebo a funçao handleSearch como prop da productpage e envio de volta o valor do search guardado em ref
//para poder processar la a logica 

function SearchBar({ handleSearch }) {
    const search = useRef()

    function searchProduct() {
        handleSearch(search)
    }

    return (
        <label htmlFor="search">
            <input  className='search' type="text" name="search" placeholder="Search" onChange={searchProduct} ref={search} />
        </label>
    )
}

export default SearchBar