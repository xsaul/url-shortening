import React from 'react'
import logo from "../assets/images/logo.svg"

function Navbar() {
  return (
    <div className='flex px-8 py-4 justify-between'>
        <div className='flex items-center'>
            <img className='mx-5' src={logo} alt="logo" />
            <a className='mx-2 text-slate-500 hover:text-black' href="#">Features</a>
            <a className='mx-2 text-slate-500 hover:text-black' href="#">Pricing</a>
            <a className='mx-2 text-slate-500 hover:text-black' href="#">Resources</a>
        </div>
        <div>
            <a className='mx-2 text-slate-500 hover:text-black' href="#">Login</a>
            <button className='mx-2 text-white bg-[#2ACFCF] hover:bg-[#38A8A8] px-5 py-2 rounded-full'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar