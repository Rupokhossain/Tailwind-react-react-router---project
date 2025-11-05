import React from 'react'
import Hero from './HomeComponents/Hero'
import Features from './Features/Features'
import PopularProducts from './HomeComponents/PopularProducts'
import Products from './HomeComponents/PopularProducts/Products'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <PopularProducts/>
        <Products/>
    </div>
  )
}

export default Home