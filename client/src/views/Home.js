import React from 'react'
import axios from 'axios'
import { PRODUCTS } from '../Product'
import HomeProduct from './HomeProduct'
import './HomeItem.css'
const Home = () => {
  return (
    <div className='art' style={{ backgroundImage:`url()`,backgroundRepeat:"",backgroundSize:"contain",
    
}}
>
    <div className='products'>
        {PRODUCTS.map ((product) => (
            <HomeProduct key={product.id} data={product}/>
        ))}
    </div>
      
    </div>
  )
}

export default Home