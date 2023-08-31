import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProductToCart } from '../redux/cart/cartSlice'


export default function Products({ product }) {

  const productCart = useSelector((state)=> state.cart.products);

  const dispatch = useDispatch();

  const handleCart = () =>{
    console.log(product)
    let productid = {
      id: product.id
    }
    dispatch(addProductToCart(productid))
    console.log(productCart)
  }

  return (
    <div className='w-96 flex flex-col items-center'>
      <Link id='product-card' to="/single-product">
        <img className='w-full h-80 object-cover rounded-lg brightness-20' src={product.thumbnail} alt="" />
        <div className="product-details flex flex-col justify-center items-center relative bottom-20 h-20 bg-[rgba(255,255,255,.7)]">
          <h4 className='text-2xl font-semibold'>{product.title}</h4>
          <p className='text-gray-600'>${product.price}</p>
          <div className="heart hidden h-12">
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </Link>

      {/* <div id='add-to-cart' className="button relative bottom-16 flex justify-center">
        <button className='border border-gray-500 px-2 py-2 font-semibold rounded-md'>ADD TO CART</button>
      </div> */}

      <div id='add-to-cart' className="button flex justify-center relative bottom-16">
        <button onClick={handleCart} className='border border-gray-500 px-2 py-2 font-semibold rounded-md'>ADD TO CART</button>
      </div>
    </div>
  )
}
