import React, { useState } from 'react'
import starFull from "../../assets/star-full.png"

function RatingForm(props) {

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked);
    }


    const { handleRating } = props;
    return (
        <div className='filter-container'>
            <button className='filter-title' onClick={handleClick}>
                <p>RATING FILTER</p>
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
                            <label htmlFor='oneStar' >
                                <input className='sort-radio' type="radio" name="rate" value="1" id="oneStar" onChange={handleRating} />
                                <img src={starFull} alt="" className='rating-star' />
                            </label>
                            <label htmlFor='twoStar' >
                                <input className='sort-radio' type="radio" name="rate" value="2" id="twoStar" onChange={handleRating} />
                                <img src={starFull} alt="" className='rating-star' />
                                <img src={starFull} alt="" className='rating-star' />
                            </label>
                            <label htmlFor='threeStar' >
                                <input className='sort-radio' type="radio" name="rate" value="3" id="three" onChange={handleRating} />
                                <img src={starFull} alt="" className='rating-star' />
                                <img src={starFull} alt="" className='rating-star' />
                                <img src={starFull} alt="" className='rating-star' />
                            </label>
                            <label htmlFor='fourStar' >
                                <input className='sort-radio' type="radio" name="rate" value="4" id="fourStar" onChange={handleRating} />
                                <img src={starFull} alt="" className='rating-star' />
                                <img src={starFull} alt="" className='rating-star' />
                                <img src={starFull} alt="" className='rating-star' />
                                <img src={starFull} alt="" className='rating-star' />
                            </label>
                            <label htmlFor='fiveStar' >
                                <input className='sort-radio' type="radio" name="rate" value="5" id="fiveStar" onChange={handleRating} />
                                <img src={starFull} alt="" className='rating-star' />
                                <img src={starFull} alt="" className='rating-star' />
                                <img src={starFull} alt="" className='rating-star' />
                                <img src={starFull} alt="" className='rating-star' />
                                <img src={starFull} alt="" className='rating-star' />
                            </label>
                        </div>
                    </form> </div>) : (<></>)}
        </div>
    )
}

export default RatingForm