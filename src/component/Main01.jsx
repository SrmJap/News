import React from 'react'
import { useState } from 'react'
import menu from '../assets/img/icon-menu.svg'
import close from '../assets/img/icon-menu-close.svg'
import logo from '../assets/img/logo.svg'
export default function Main01() {

  const [menuClicked, setMenuClicked] = useState(true)

  const handleClick = () => {
    setMenuClicked(prevState => !prevState)
  }

  return (
    <header className='container mx-auto'>
      <div className='mt-10 flex justify-between px-10'>
        <div>
          <img src={logo} alt="" />
        </div>
        <ul className={`${menuClicked ? 'hidden' : ''} absolute bg-white top-0 right-0 w-[256px]  p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-[16px]`}>
          <li className={`${menuClicked ? 'hidden' : ''} cursor-pointer sm:hidden  flex place-content-end`}>
            <img className='w-8 h-8 mb-[87px]' src={close} onClick={handleClick} alt="" />
          </li>
          <li className='mb-8 sm:mb-0'>
            <a className='hover:text-red-500 duration-500 sm:text-4' href="#">Home</a>
          </li>
          <li className='mb-8 sm:mb-0'>
            <a className='hover:text-red-500 duration-500 ' href="#">New</a>
          </li>
          <li className='mb-8 sm:mb-0'>
            <a className='hover:text-red-500 duration-500 ' href="#">Popular</a>
          </li>
          <li className='mb-8 sm:mb-0'>
            <a className='hover:text-red-500 duration-500 ' href="#">Opinion</a>
          </li>
          <li className='mb-8 sm:mb-0'>
            <a className='hover:text-red-500 duration-500' href="#">Top Rated</a>
          </li>
        </ul>
        <img className={`${menuClicked ? '' : 'hidden'} w-10 h-4 cursor-pointer sm:hidden`} src={menu} onClick={handleClick} alt="" />
      </div >

    </header>

  )
}