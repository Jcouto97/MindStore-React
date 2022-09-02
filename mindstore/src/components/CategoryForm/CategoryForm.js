import React from 'react'

function CategoryForm(props) {
    const { handleCategory } = props;

    return (
        <form>
        <p>CATEGORY FILTER</p>
        <div className='sort-input' >
            <label htmlFor='women' >
                <input type="radio" name="category" value="women's+clothing" id="women" onChange={handleCategory} />
                Women's clothing
            </label>
            <label htmlFor='man' >
                <input type="radio" name="category" value="men's+clothing" id="man" onChange={handleCategory} />
                Men's clothing
            </label>
            <label htmlFor='jewelery' >
                <input type="radio" name="category" value="jewelery" id="jewelery" onChange={handleCategory} />
                Jewelery
            </label>
            <label htmlFor='electronics' >
                <input type="radio" name="category" value="electronics" id="electronics" onChange={handleCategory} />
                Electronics
            </label>
        </div>
        </form>
    )
}

export default CategoryForm