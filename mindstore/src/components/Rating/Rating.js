import React from 'react'
import starFull from "../../assets/star-full.png"
import starEmpty from "../../assets/star-empty.png"
import starHalf from '../../assets/star-half.png'


function Rating(props) {
    const { productRating } = props;

    //para arredondar caso haja casas decimais nas centesimas (4.67 = 4.7 = 5 por ex)
    const roundedRating = Math.round(productRating.rate * 10) / 10;

    if (roundedRating <= 0.4) {
        return (
            <div className="product-detail_rating">
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {roundedRating} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (roundedRating <= 0.9) {
        return (
            <div className="product-detail_rating">
                <img src={starHalf} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {roundedRating} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (roundedRating <= 1.4) {
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {roundedRating} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (roundedRating <= 1.9) {
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starHalf} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {roundedRating} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (roundedRating <= 2.4) {
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {roundedRating} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (roundedRating <= 2.9) {
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starHalf} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {roundedRating} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (roundedRating <= 3.4) {
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {roundedRating} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (roundedRating <= 3.9) {
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starHalf} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {roundedRating} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (roundedRating <= 4.4) {
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starEmpty} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {roundedRating} ({productRating.count} reviews)</span>
            </div>
        )
    } else if (roundedRating <= 4.4) {
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starHalf} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {roundedRating} ({productRating.count} reviews)</span>
            </div>
        )
    } else {
        return (
            <div className="product-detail_rating">
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <img src={starFull} alt="" className='rating-star' />
                <span>&nbsp; &nbsp; {roundedRating} ({productRating.count} reviews)</span>
            </div>
        )
    }
}

export default Rating;