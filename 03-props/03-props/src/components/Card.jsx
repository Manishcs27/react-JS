import React from 'react'

const Card = (props) => {
  return (
    <div>
       <div className='card'>
      <h1>{props.user}</h1>
      <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </p>
      <button>Click Me</button>
    </div>
    </div>
  )
}

export default Card
