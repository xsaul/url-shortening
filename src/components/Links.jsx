import React from 'react'

function Links({title,link1, link2, link3, link4}) {
  return (
    <div className='flex flex-col'>
        <h3 className='text-white text-bold'>{title}</h3>
        <a className='text-slate-400 my-3 text-base hover:text-[#2ACFCF]' href="#">{link1}</a>
        <a className='text-slate-400 my-3 text-base hover:text-[#2ACFCF]' href="#">{link2}</a>
        <a className='text-slate-400 my-3 text-base hover:text-[#2ACFCF]' href="#">{link3}</a>
        <a className='text-slate-400 my-3 text-base hover:text-[#2ACFCF]' href="#{">{link4}</a>
    </div>
  )
}

export default Links