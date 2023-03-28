import React from 'react'
import hero from "../assets/images/illustration-working.svg"

function Hero() {
  return (
    <div className='flex px-8 max-[768px]:flex-col-reverse'>
      <div className='mt-[6.5rem]'>
        <h1 className='text-5xl font-bold text-slate-800 pl-[1rem] pr-[12rem] max-[1024px]:pr-[8rem] leading-[3.5rem]'>More than just shorter links</h1>
        <p className='text-slate-400 pl-4 pr-[17rem] max-[1024px]:pr-[13rem] mt-[0.7rem]'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <button className='mx-2 text-white bg-[#2ACFCF] hover:bg-[#38A8A8] px-5 py-2 rounded-full mt-[1.4rem]'>Get Started</button>
      </div>
      <img className='w-[45%] max-[768px]:w-[90%]' src={hero} alt="hero" />
    </div>
  )
}

export default Hero