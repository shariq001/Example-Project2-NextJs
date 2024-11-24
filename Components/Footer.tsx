import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className='bg-[#043873] py-[30px] px-[50px] flex justify-between border-t-[1px] border-[#f7f7ee] sm:w-[320px] sm:flex-col sm:gap-[50px] sm:px-[25px] md:w-[768px] lg:w-[1152px] lg:flex-row x:w-[1440px] 2xl:w-[1536px]'>
      <ul className='flex justify-center gap-[30px]  px-[50px] text-white sm:flex-col sm:items-center lg:flex-row'>
        <li ><FontAwesomeIcon icon={faGlobe} className='mr-[5px]' />English <FontAwesomeIcon icon={faAngleDown} className='ml-[5px] mt-[3px]'/></li>
        <li>Terms & privacy</li>
        <li>Security</li>
        <li>Status</li>
        <li className='text-center'>&copy;2021 Whitepace LLC.</li>
      </ul>

      <ul className='flex justify-center gap-[30px] px-[50px]'>
        <a href="">
          <li><FontAwesomeIcon icon={faFacebookF} size='lg' /></li>
        </a>
        <a href="">
          <li><FontAwesomeIcon icon={faTwitter} size='lg' /></li>
        </a>
        <a href="">
          <li><FontAwesomeIcon icon={faLinkedinIn} size='lg' /></li>
        </a>
      </ul>
    </div>
  )
}

export default Footer