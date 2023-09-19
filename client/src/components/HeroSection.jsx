import React, { useEffect, useState } from 'react'
import img from '../assets/images/test.png'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function HeroSection() {

    const [product, setProduct] = useState({});
    const [count , setCount] = useState(0);

    const fetchProduct = async () => {
        const response = await axios.get('https://dummyjson.com/products/5');
        setProduct(response.data);
        console.log(response.data);
    }

    function IncreamentCount(){
        setCount((prev)=>prev+1);
        console.log(count)
    }

    function decreamentCount(){
        setCount((prev)=>prev-1);
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <section className='h-full w-full bg-[#e2f3ff] py-20 flex flex-wrap-reverse justify-evenly gap-20'>
            <div className="left w-80 flex flex-col justify-center gap-4">
                <p className='text-[#3584e4]'>Ecommerce</p>
                <h2 className='text-6xl font-extrabold'>{product.title}</h2>
                <p className='text-[#8c9ca7]'>{product.description}</p>
                <div className="price flex gap-2 items-center">
                    <p className='text-2xl font-bold'>${product.price}</p>
                    <p className='text-gray-600'>Regular Price</p>
                </div>

                <div className="buy bg-white h-16 w-full flex items-center gap-8 pl-6">
                        <button disabled={count === 0} onClick={decreamentCount} className='border border-gray-600 rounded-full px-2 py-2'><FontAwesomeIcon icon={faMinus} size='xl'/></button>
                        <p className='text-4xl'>{count}</p>
                        <button onClick={IncreamentCount} className='border border-gray-600 rounded-full px-2 py-2'><FontAwesomeIcon icon={faPlus} size='xl'/></button>
                        <button className='absolute sm:ml-64 ml-52 bg-[#3584e4] text-white px-4 py-2'>Buy ${product.price * count}</button>    
                </div>
            </div>

            <div className="right">
                <img className='rounded-lg' src={product.thumbnail} alt="" />
            </div>
        </section>
    )
}
