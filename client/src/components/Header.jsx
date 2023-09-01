import { faArrowLeftLong, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import menuPic from '../assets/images/menu.png'
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

export default function Header() {

  const userData = useSelector((state) => state.user.currentUser);
  const userCart = useSelector((state) => state.cart.products);
  const location = useLocation();


  //states
  const [search, setSearch] = useState(false)
  const [menu, setMenu] = useState(false)
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState(0);



  useEffect(() => {
    console.log(userCart)
    let total = 0
    userCart?.map((e) => {
      total = total + e.quantity;
      setCart(total)
      console.log(total)
    })
    setMenu(false);
    if (location.pathname.split('/')[1] == "admin") {
      setShow(false);
    } else {
      setShow(true);
    }
    console.log(location.pathname.split('/')[1])
  }, [location, userCart])

  function handleSideBar() {
    const sideBar = document.getElementById("sidebar-multi-level-sidebar");
    sideBar.classList.toggle('-translate-x-full');
  }

  return (
    <header className={`${!show && "hidden"} bg-white text-black fixed w-11/12 h-12 left-[4%] flex justify-between items-center px-4 rounded-xl mt-4 z-20`}>


      {
        search ?
          <div className="search w-full flex items-center">
            <FontAwesomeIcon onClick={() => setSearch((prev) => !prev)} className='px-2 hover:cursor-pointer' icon={faArrowLeftLong} />
            <motion.input
              initial={{
                width: 0,
                x: "100%"
              }}
              animate={{
                width: search ? '100%' : 0,
                x: 0,
                direction: 'revert'
              }} autoFocus className=' border border-gray-600 rounded-xl' type='text' />
          </div> :
          <>
            <div className="logo font-semibold flex gap-4">
              {
                location.pathname.split('/')[1] == 'admin' &&
                <img onClick={handleSideBar} className=' hover:cursor-pointer block md:hidden' src={menuPic} alt="" />
              }
              <Link to="/"><h2>Eco</h2></Link>
            </div>
            <nav className="center hidden md:block">
              <ul className='flex gap-4 font-semibold'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><a href="/">About</a></li>
                <li><Link to="/admin">Admin</Link></li>
                {/* <li><Link to="/login">Login</Link></li> */}
              </ul>
            </nav>
            <div className="right hidden md:flex items-center gap-6 ">
              <div id="cart">
                {cart > 0 &&
                  <div className="relative inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{cart}</div>
                }

                <FontAwesomeIcon icon={faCartShopping} style={{ color: "#3584e4", }} />
              </div>

              <FontAwesomeIcon onClick={() => setSearch((prev) => !prev)} className='hover:cursor-pointer' icon={faMagnifyingGlass} />
              {Object.keys(userData).length > 0 ? <Link to="#">{userData.username}</Link> :
                <Link to="/login">Login</Link>}
            </div>
          </>
      }
      <div className="responsiveCart flex items-center gap-4 md:hidden">
        <FontAwesomeIcon icon={faCartShopping} style={{ color: "#3584e4", }} />
        <img onClick={() => setMenu((prev) => !prev)} className=' hover:cursor-pointer' src={menuPic} alt="" />
        {Object.keys(userData).length > 0 ? <h2>{userData.username}</h2> : "not"}
      </div>

      {/* <div className={`responsiveMenu ${menu ? 'opacity-100 slide-left' : 'slide-right opacity-0'} md:hidden absolute top-14 right-[-55%] rounded-md bg-white w-1/2 h-[80vh]`}>
        <ul className='flex gap-4 h-full justify-center flex-col items-center font-semibold text-xl'>
          <li><Link to="/">Home</Link></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><Link to="/admin">Support</Link></li>
        </ul>
      </div> */}

      <div className={`responsiveMenu ${menu ? '-translate-x-8' : 'translate-x-full'} md:hidden transition-transform fixed top-16 right-0 rounded-md w-1/2 h-[80vh] bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-400`}>
        <ul className='flex gap-4 h-full justify-center flex-col items-center font-semibold text-xl'>
          <li><Link to="/">Home</Link></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </div>


    </header>
  )
}
