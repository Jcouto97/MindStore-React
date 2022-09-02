import React from 'react'

function RatingForm(props) {
    const { handleRating } = props;
    return (
        <form>
            <p>RATING FILTER</p>
            <div className='sort-input' >
                <label htmlFor='oneStar' >
                    <input type="radio" name="rate" value="1" id="oneStar" onChange={handleRating} />
                    One star
                </label>
                <label htmlFor='twoStar' >
                    <input type="radio" name="rate" value="2" id="twoStar" onChange={handleRating} />
                    Two star
                </label>
                <label htmlFor='threeStar' >
                    <input type="radio" name="rate" value="3" id="three" onChange={handleRating} />
                    Three star
                </label>
                <label htmlFor='fourStar' >
                    <input type="radio" name="rate" value="4" id="fourStar" onChange={handleRating} />
                    Four star
                </label>
                <label htmlFor='fiveStar' >
                    <input type="radio" name="rate" value="5" id="fiveStar" onChange={handleRating} />
                    Five star
                </label>
            </div>
        </form>
    )
}

export default RatingForm