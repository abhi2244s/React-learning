import React from 'react'

function Searche(props) {
    const img = `https://source.unsplash.com/400x400/?${props.img}`
  return (
    <div>
        <img src={img} alt='img'/>
    </div>
  )
}

export default Searche