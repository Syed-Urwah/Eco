import React from 'react'
import { Link } from 'react-router-dom'

export default function Products({ product }) {
  return (
    <div className='w-96'>
      <Link to="/single-product">
        <img className='w-full h-80 object-cover rounded-lg brightness-20' src={product.thumbnail} alt="" />
        <div className="details flex flex-col justify-center items-center relative bottom-20 h-20 bg-[rgba(255,255,255,.7)]">
          <h4 className='text-2xl font-semibold'>{product.title}</h4>
          <p className='text-gray-600'>${product.price}</p>
        </div>
      </Link>

      <div className="button relative bottom-16 flex justify-center">
        <button className='border border-gray-500 px-2 py-2 font-semibold rounded-md'>ADD TO CART</button>
      </div>
    </div>
  )
}
