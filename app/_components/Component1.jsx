import React from 'react'

async function Component1() {
    const result=await fetch('https://fakestoreapi.com/products/1');
  return (
    <div>component1</div>
  )
}

export default Component1