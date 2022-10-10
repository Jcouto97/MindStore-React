import React, { useState } from 'react'

function CategoryForm(props) {
    const { handleCategory } = props;
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className='filter-container'>
            <button className='filter-title' onClick={handleClick}>
                <p className='sort-type' >CATEGORY FILTER</p>
                {isClicked ? (
                    <img className='arrow' src={require("../../assets/arrow-down.png")} alt="arrow-down" />
                ) : (
                    <img className='arrow' src={require("../../assets/arrow-right.png")} alt="arrow-right" />
                )}
            </button>
            <div />
            {isClicked ? (
                <div>
                    <form>
                        <div className='sort-input' >
                            <label htmlFor='women' >
                                <input className='sort-radio' type="radio" name="category" value="women's+clothing" id="women" onChange={handleCategory} />
                                Women's clothing
                            </label>
                            <label htmlFor='man' >
                                <input className='sort-radio' type="radio" name="category" value="men's+clothing" id="man" onChange={handleCategory} />
                                Men's clothing
                            </label>
                            <label htmlFor='jewelery' >
                                <input className='sort-radio' type="radio" name="category" value="jewelery" id="jewelery" onChange={handleCategory} />
                                Jewelery
                            </label>
                            <label htmlFor='electronics' >
                                <input className='sort-radio' type="radio" name="category" value="electronics" id="electronics" onChange={handleCategory} />
                                Electronics
                            </label>
                        </div>
                    </form> </div>) : (<></>)}
        </div>
    )
}

export default CategoryForm