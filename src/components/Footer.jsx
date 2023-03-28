import React from 'react'
import Links from './Links'
import logo from "../assets/images/logo.svg"
import facebook from "../assets/images/icon-facebook.svg"
import twitter from "../assets/images/icon-twitter.svg"
import pinterest from "../assets/images/icon-pinterest.svg"
import instagram from "../assets/images/icon-instagram.svg"


function Footer() {
  return (
    <div className='py-[3rem] px-[5rem] max-[768px]:px-[0.1rem] bg-[#232127] flex max-[425px]:flex-col justify-between'>
      <div>
        <img className='mx-5' src={logo} alt="logo" />
        </div>
      <div className='flex flex-col'>
      <Links title="Features" link1="Link Shortening" link2="Branded Links" link3="Analytics"/>
      </div>
      <div className='flex flex-col'>
      <Links title="Resources" link1="Blog" link2="Developers" link3="Support"/>
      </div>
      <div className='flex flex-col'>
      <Links title="Company" link1="About" link2="Our Team" link3="Careers" link4="Contact"/>
      </div>
      <div className='flex gap-5'>
        <a href="#">
         <img src={facebook} alt="" />
          </a>
        <a href="#">
        <img src={twitter} alt="" />
          </a>
        <a href="#">
        <img src={pinterest} alt="" />
          </a>
        <a href="#">
        <img src={instagram} alt="" />
          </a>
      </div>
    </div>
  )
}

export default Footer