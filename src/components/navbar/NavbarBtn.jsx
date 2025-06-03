import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";

const NavbarBtn = () => {
  return (
    <button className='text-white flex text-sm sm:text-md font-bold cyanShadow hover:scale-110 transition-all duration-500 cursor-pointer items-center border hover:border-[#fb9718] rounded-full border-[#15d1e9] px-2 py-1 gap-1 bg-gradient-to-r from-[#15d1e9] to-[#fb9718]' >
      Hire Me <FiArrowDownRight/>
    </button>
  )
}

export default NavbarBtn
