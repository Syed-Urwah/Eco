import { faArrowLeftLong, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import menuPic from '../assets/images/menu.png'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Header() {

  const [search, setSearch] = useState(false)
  const [menu, setMenu] = useState(false)

  return (
    <header className='bg-white text-black fixed w-11/12 h-12 left-[4%] flex justify-between items-center px-4 rounded-xl mt-4 z-20'>

      {
        search ?
          <div className="search w-full flex items-center">
            <FontAwesomeIcon onClick={() => setSearch((prev) => !prev)} className='px-2 hover:cursor-pointer' icon={faArrowLeftLong} />
            <input autoFocus className='w-full border border-gray-600 rounded-xl' type='text' />
          </div> :
          <>
            <div className="logo font-semibold">
              <h2>Eco</h2>
            </div>
            <nav className="center hidden md:block">
              <ul className='flex gap-4 font-semibold'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Support</a></li>
              </ul>
            </nav>
            <div className="right hidden md:flex gap-6 ">
              <FontAwesomeIcon icon={faCartShopping} style={{ color: "#3584e4", }} />
              <FontAwesomeIcon onClick={() => setSearch((prev) => !prev)} className='hover:cursor-pointer' icon={faMagnifyingGlass} />
            </div>
          </>
      }
      <div className="responsiveCart flex items-center gap-4 md:hidden">
        <FontAwesomeIcon  icon={faCartShopping} style={{ color: "#3584e4", }} />
        <img onClick={() => setMenu((prev) => !prev)} className=' hover:cursor-pointer' src={menuPic} alt="" />
      </div>

      <div className={`responsiveMenu ${menu ? 'slide-left' : 'slide-right'} md:hidden absolute top-14 right-[-55%] rounded-md bg-white w-1/2 h-[80vh]`}>
        <ul className='flex gap-4 h-full justify-center flex-col items-center font-semibold text-xl'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>


    </header>
  )
}
