import { faCreditCard, faHeadphonesSimple, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import profite from '../assets/images/profits.png'

export default function Service() {
  return (
    <section className='bg-gray-100 py-20'>
        <div className="headings flex flex-col items-center gap-1">
            <p className='text-[#3584e4]'>Best Service</p>
            <h4 className='text-2xl font-bold'>Our Service will make your </h4> 
            <h4 className='text-2xl font-bold'>like more easier</h4>
        </div>

        <div className='flex flex-wrap pt-5 justify-around'>
            <div className="delivery flex flex-col gap-2 items-center">
                <FontAwesomeIcon className='bg-[#fefefd] py-4 px-4 rounded-xl' size='4x' icon={faTruck} style={{color: "#f5c211",}} />
                <h5 className='font-semibold text-lg'>Free Shoping</h5>
                <p className='text-sm font-thin'>Free delivery for all orders</p>
            </div>
            <div className="delivery flex flex-col gap-2 items-center">
                <img src={profite} className='bg-[#fefefd] py-4 px-4 rounded-xl w-24' />
                <h5 className='font-semibold text-lg'>Money Guarantee</h5>
                <p className='text-sm font-thin'>30 days money back</p>
            </div>
            <div className="delivery flex flex-col gap-2 items-center">
                <FontAwesomeIcon className='bg-[#fefefd] py-4 px-4 rounded-xl' size='4x' icon={faHeadphonesSimple} style={{color: "#f66151",}} />
                <h5 className='font-semibold text-lg'>24/7 Support</h5>
                <p className='text-sm font-thin'>Friendly 24/ support</p>
            </div>
            <div className="delivery flex flex-col gap-2 items-center">
                <FontAwesomeIcon className='bg-[#fefefd] py-4 px-4 rounded-xl text-blue-600' size='4x' icon={faCreditCard} />
                <h5 className='font-semibold text-lg'>Secure Payment</h5>
                <p className='text-sm font-thin'>All cards accepted</p>
            </div>
        </div>
    </section>
  )
}
