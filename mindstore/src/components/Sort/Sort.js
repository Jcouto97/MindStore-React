import React, { useState } from 'react'
import './sort.css';

function Sort(props) {
  const { handleSort } = props
  //recebe do sidebar
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className='filter-container'>
      <button className='filter-title' onClick={handleClick}>
        <p className='sort-type' >DIRECTION SORT</p>
        {isClicked ? (
          <img className='arrow' src={require("../../assets/arrow-down.png")} alt="arrow-down" />
        ) : (
          <img className='arrow' src={require("../../assets/arrow-right.png")} alt="arrow-right" />
        )}
        </button>
        <div />
        {isClicked ? (
          <div>
            <form className='filter-form' >
              <label htmlFor='ascending' >
                <input className='sort-radio' type="radio" name="direction" value="ASC" id="ascending" onChange={handleSort} />
                Ascending
              </label>


              <label htmlFor='descending' >
                <input className='sort-radio' type="radio" name="direction" value="DESC" id="descending" onChange={handleSort} />
                Descending
              </label>
            </form> </div>) : (<></>)}
    
    </div>
  )
}

export default Sort