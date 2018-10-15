import React from 'react'

export default ({ onClick }) => {
  let value = ''

  return (
    <div className='search-field'>
      <input onChange={(e) => { value = e.target.value } }/>
      <button onClick={() => onClick(value)}>hit me!</button>
    </div>
  )
}
