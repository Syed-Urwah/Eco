import React, { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import Products from '../cards/Products'
import axios from 'axios';
import Filter from '../components/Filter';

export default function ArchiveProduct() {

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
        fetchProducts();
    }, [])

    return (
        <section id='archive-products-page'>
            <HeroSection />

            <Filter/>

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
