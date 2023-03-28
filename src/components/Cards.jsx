import React from 'react'
import "../index.css"
import Card from "../components/Card"
import iconBrand from "../assets/images/icon-brand-recognition.svg"
import iconRecords from "../assets/images/icon-detailed-records.svg"
import iconCustom from "../assets/images/icon-fully-customizable.svg"


function Cards() {
  return (
    <div className='bg-slate-200 h-[35rem] p-5 mt-[3rem]'>
      <h2 className='text-3xl text-extrabold ml-[32rem] max-[1024px]:ml-[22rem] max-[768px]:ml-[15rem] mt-[2.2rem] text-slate-900'>Advanced Statistics</h2>
      <p className='ml-[7rem] max-[1024px]:ml-[4rem] max-[768px]:ml-[5rem] mt-[2rem] px-[20rem] max-[1024px]:px-[15rem] max-[768px]:px-[10rem] text-slate-400'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      <div className='flex gap-[1.5rem] max-[768px]:gap-[0.5rem] px-[4rem] max-[768px]:px-[0.1rem] mt-[5.5rem]'>
      <Card icon={iconBrand} title="Brand Recognition" text="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content." />
      <Card icon={iconRecords} title="Detailed Records" text="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions." />
      <Card icon={iconCustom} title="Fully Customizable" text="Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement." />
  </div>
    </div>
  )
}

export default Cards