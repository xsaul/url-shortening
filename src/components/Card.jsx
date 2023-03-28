import React from 'react'

function Card({icon, title, text}) {
  return (
    <div className='bg-white p-5 h-[12rem] max-[1024px]:h-[15.5rem] max-[768px]:h-[17rem]'>
        <img className='rounded-full bg-[#3B3054] absolute top-[65rem] max-[1024px]:top-[59rem] max-[768px]:top-[85rem]' src={icon} alt={icon} />
        <h1 className='text-bold text-2xl mt-[1.2rem]'>{title}</h1>
        <p className='text-slate-400 mt-[1rem] text-sm leading-[1.5rem]'>{text}</p>
    </div>
  )
}

export default Card