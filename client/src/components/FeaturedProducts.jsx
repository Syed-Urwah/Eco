import React, { useEffect, useState } from 'react'
import Products from '../cards/Products'
import axios from 'axios';

export default function FeaturedProducts() {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const url = import.meta.env.VITE_BASEURL + '/api/product';
        try {
            const response = await axios.get(url);
            console.log(response.data);
            setProducts(response.data);
        } catch (error) {
            console.log(error)
        }

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
                        return <Products key={e._id} product={e} />
                    })
                }
            </div>


        </section>
    )
}
