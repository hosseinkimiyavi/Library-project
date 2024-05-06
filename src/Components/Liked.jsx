import React from 'react'

function Liked({data:{title,image}}) {
  return (
    <>
    <div>
    <img src={image} alt={title} />
    <h1>{title}</h1>


    </div>
    </>
  )
}

export default Liked