import React,{useState} from 'react'
import googleLogo from '../assets/images/google.png'
import googleLogo2 from '../assets/images/google(2).png'


export default function Login() {

  
  const [hover, sethover] = useState(false)

  function handleGoogleLogo(){
    const defaultGoogle = document.getElementById('default-google');
    const hoverGoogle = document.getElementById('hover-google');
    if(!hover){
      defaultGoogle.classList.add('hidden');
      hoverGoogle.classList.remove('hidden');
      sethover(true)
    }else{
      defaultGoogle.classList.remove('hidden');
      hoverGoogle.classList.add('hidden');
      sethover(false)
    }
    
  }
  
 

  return (

    <section className='bg-[#e2f3ff] py-20 text-black min-h-screen mx-auto'>
        <form className='w-full flex flex-col justify-center items-center gap-3 pt-10'>
            <h2 className='text-4xl font-semibold'>Login</h2>
            <button onMouseLeave={handleGoogleLogo} onMouseEnter={handleGoogleLogo} className='flex items-center border-2 border-solid border-[#30303d] rounded-xl py-2 gap-4 w-80 justify-center hover:bg-white bg-[#3584e4] text-white hover:text-black'>
              <img id='hover-google' className='w-4 h-4 hidden' src={googleLogo2} alt="" /><img id='default-google' className='w-4 h-4' src={googleLogo} alt="" /><p>Continue with Google</p>
            </button>
            <div className="inputs flex flex-col gap-3">
              <input className='border-2 border-solid border-[#30303d] rounded-xl w-80 py-2 bg-inherit placeholder-black' placeholder='   Email' type="email" name="email" id="email" />
              <input className='border-2 border-solid border-[#30303d] rounded-xl w-80 py-2 bg-inherit placeholder-black' placeholder='   Password' type="password" name="password" id="password" />
            </div>

            <button className='border-2 border-solid border-[#30303d] rounded-xl py-2 gap-4 w-80 justify-center text-white bg-[#3584e4] hover:bg-blue-600'>Login</button>
           
        </form>
    </section>
  )
}
