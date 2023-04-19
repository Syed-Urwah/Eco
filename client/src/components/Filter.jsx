import { faSliders, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import RangeSlider from './RangeSlider';

export default function Filter() {

    const [filter, setFilter] = useState(false);

    return (
        <>
            <div className="filter flex flex-wrap justify-between mx-10 sm:mx-32 py-5 border-b-2">
                <div onClick={() => setFilter((prev) => !prev)} className="left flex items-center gap-2 bg-[#3584e4] px-4 py-2 text-white hover:cursor-pointer">
                    <FontAwesomeIcon icon={faSliders} />
                    <p>Filter</p>
                </div>
                <div className="right flex items-center gap-2">
                    <p className='hidden md:block'>13 Products</p>
                    <select className='bg-[#3584e4] px-4 py-2 md:text-base text-sm md:w-fit w-28 text-white' name="" id="">
                        <option value="">Best Sellers</option>
                        <option value="">Price, low to high</option>
                        <option value="">Price, high to low</option>
                    </select>
                </div>
            </div>

            <div id='filter-sidebar' className={`filters ${filter ? 'slide-left-filter' : 'slide-right-filter'} bg-white h-screen w-96 fixed right-[-385px] top-0 z-30 gap-4 flex flex-col px-4 py-2`}>
                <div className="heading flex justify-between items-center">
                    <div></div>
                    <h2 className='text-2xl'>Filter</h2>
                    <FontAwesomeIcon onClick={() => setFilter((prev) => !prev)} className='hover:cursor-pointer' size='2x' icon={faXmark} />
                </div>

                <div className="category">
                    <h3>CATEGORIES</h3>
                    <div className="categories flex flex-wrap py-2 gap-2">
                        <button className='border border-gray-600 px-2 py-2'>Sunglasses</button>
                        <button className='border border-gray-600 px-2 py-2'>Wallet</button>
                        <button className='border border-gray-600 px-2 py-2'>Sunglasses</button>
                        <button className='border border-gray-600 px-2 py-2'>Sunglasses</button>

                    </div>
                </div>

                <div className="color">
                    <h3>COLOUR</h3>
                    <div className="colours flex flex-wrap py-2 gap-2 px-4">
                        <div className="c1 flex flex-col items-center justify-center">
                            <button className='bg-red-700 rounded-full px-4 py-4' />
                            <p>Red</p>
                        </div>
                        <div className="c1 flex flex-col items-center justify-center">
                            <button className='bg-red-700 rounded-full px-4 py-4' />
                            <p>Red</p>
                        </div><div className="c1 flex flex-col items-center justify-center">
                            <button className='bg-red-700 rounded-full px-4 py-4' />
                            <p>Red</p>
                        </div>
                    </div>
                </div>

                <div className="price">
                    <h3>PRICE</h3>
                    <RangeSlider />
                </div>

                <div className="brand">
                    <h3>BRANDS</h3>
                    <div className="categories flex flex-wrap py-2 gap-2">
                        <button className='border border-gray-600 px-2 py-2'>Lenovo</button>
                        <button className='border border-gray-600 px-2 py-2'>Dell</button>
                        <button className='border border-gray-600 px-2 py-2'>MI</button>
                        <button className='border border-gray-600 px-2 py-2'>Sony</button>

                    </div>
                </div>

                <div className="footer fixed bottom-0 flex flex-col items-center gap-2 w-full">
                    <button className='bg-[#3584e4] px-4 py-2 text-white w-1/2'>Show 6 results</button>
                    <button>Clear all</button>
                </div>
            </div>
        </>
    )
}
