import React, { useState } from 'react'
import googleLogo from '../assets/images/google.png'
import googleLogo2 from '../assets/images/google(2).png'
import bgSignup from '../assets/images/bg-signup.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Registration() {



  const [hover, sethover] = useState(false)
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate();

  

  const handleSignUp = async (e) =>{
    e.preventDefault();
    const url = import.meta.env.VITE_BASEURL + '/api/auth/register';

    try {
      console.log(user)
      const response = await axios.post(url,{
        username: user.name,
        email: user.email,
        password: user.password
      })
      navigate('/login')
        
    } catch (error) {
      alert(error.response?.data);
    }
    
    
  }



  return (

    <div className="flex w-screen flex-wrap text-slate-800">
      <div className="relative signup-bg hidden h-screen select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2">
        {/* <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
          <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">New Feature</span>
          <p className="my-6 text-3xl font-semibold leading-10">Create animations with <span className="mx-auto block w-56 whitespace-nowrap rounded-lg bg-orange-400 py-2 text-white">drag and drop</span></p>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt necessitatibus nostrum repellendus ab totam.</p>
          <a href="#" className="font-semibold tracking-wide text-white underline underline-offset-4">Learn More</a>
        </div> */}
         {/* <img className="mx-auto w-11/12 max-w-lg rounded-lg object-cover" src={bgSignup} />  */}
      </div>
      <div className="flex w-full flex-col md:w-1/2">
        
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:text-left md:leading-tight">Create your free account</p>
          <p className="mt-6 text-center font-medium md:text-left">
            Already using Eco?
            <Link to='/login' className="whitespace-nowrap font-semibold text-blue-700">Login here</Link>
          </p>
          <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2"><img className="mr-2 h-5" src={googleLogo2} alt="true" /> Get started with Google</button>
          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">Or use email instead</div>
          </div>
          <form onSubmit={handleSignUp} className="flex flex-col items-stretch pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input onChange={(e)=>setUser({
                  ...user , name: e.target.value
                })} value={user.name} type="text" id="login-name" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Name" />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input onChange={(e)=>{
                  setUser({...user ,email: e.target.value})
                }} value={user.email} type="email" id="login-email" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input onChange={(e)=>{
                  setUser({...user ,password: e.target.value})
                }} value={user.password} type="password" id="login-password" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password (minimum 8 characters)" />
              </div>
            </div>
            
            <button type="submit" className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32">Sign in</button>
          </form>
        </div>
      </div>
    </div>

  )
}
