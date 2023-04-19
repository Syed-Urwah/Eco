import React, { useEffect, useState } from 'react'
import Products from '../cards/Products'
import axios from 'axios';

export default function FeaturedProducts() {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await axios.get('https://dummyjson.com/products?limit=10');
        console.log(response.data.products);
        setProducts(response.data.products);
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <section className='py-20'>
            <div className="headings flex flex-col items-center">
                <p className='text-[#3584e4]'>FEATURED PRODUCTS</p>
                <h2 className='text-2xl font-bold'>Choose as you want</h2>
            </div>

            <div className="product flex justify-center flex-wrap gap-12 px-16 pt-10">
                {
                    products.map((e) => {
                        return <Products key={e.id} product={e} />
                    })
                }
            </div>


        </section>
    )
}
