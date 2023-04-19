import React, { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import Products from '../cards/Products'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import Filter from '../components/Filter';

export default function ArchiveProduct() {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await axios.get('https://dummyjson.com/products?limit=10');
        console.log(response.data.products);
        setProducts(response.data.products);
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
                        return <Products key={e.id} product={e} />
                    })
                }
            </div>
        </section>
    )
}
