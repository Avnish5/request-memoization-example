import React from 'react'

async function Component2() {
    const result=await fetch('https://fakestoreapi.com/products/1');
  return (
    <div>component2</div>
  )
}

export default Component2