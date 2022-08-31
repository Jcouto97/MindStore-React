import React from 'react'

function Sort(props) {
    const{ handleSort } = props
    //recebe do sidebar

  return (
    <form>
    <label htmlFor='ascending' >
      <input type="radio" name="direction" value="ASC" id="ascending" onChange={handleSort} />
      Ascending
    </label>
    <label htmlFor='descending' >
      <input type="radio" name="direction" value="DESC" id="descending" onChange={handleSort} />
      Descending
    </label>
  </form>
  )
}

export default Sort