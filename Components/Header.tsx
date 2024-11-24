import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (

    <div className="bg-[#043873] text-white flex justify-between items-center w-[1920px] px-[220px] py-[16px] sm:w-[320px] sm:px-[10px] md:w-[768px] md:px-[30px] lg:w-[1152px] x:w-[1440px] 2xl:w-[1536px]">
      {/* Logo */}
      <div className="sm:w-[134px] sm:h-[24px]">
        <Image src='/Images/Logo.png' width={191} height={35} alt="Logo"/>
      </div>

      {/* Nav */}
      <nav className="flex justify-center gap-[50px] items-center">
        <ul className="flex justify-center items-center gap-[32px] sm:hidden x:flex">
          <li>Products <FontAwesomeIcon icon={faAngleDown} className="ml-[10px]"/></li>
          <li>Solutions <FontAwesomeIcon icon={faAngleDown} className="ml-[10px]"/></li>
          <li>Resources <FontAwesomeIcon icon={faAngleDown} className="ml-[10px]"/></li>
          <li>Pricing <FontAwesomeIcon icon={faAngleDown} className="ml-[10px]"/></li>
        </ul>

        <ul className="flex justify-center items-center gap-[24px]">
          <li><button className="bg-[#FFE492] text-[#043873] py-[16px] px-[40px] rounded-[8px] sm:hidden lg:block">Login</button></li>
          <li><button className="bg-[#4F9CF9] text-white py-[16px] px-[40px] rounded-[8px] sm:hidden lg:block">Try Whitepace free <FontAwesomeIcon icon={faArrowRight} className="ml-[7px]" /></button></li>
          <li><button className="hidden sm:block x:hidden 2xl:hidden"><FontAwesomeIcon icon={faBars} /></button></li>
        </ul>

      </nav>
    </div>
  )
}

export default Header