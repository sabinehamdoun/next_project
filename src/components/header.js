"use client"
import React from 'react'
import Link from 'next/link'

const Header = () => {
  
  return (
    <nav>
      <div className="w-full bg-[#f0f0f0]">
        <div className="flex max-w-screen-xl mx-auto">
          <div>
            <a href="#home"><img src={"/assets/logo-bg.png"} alt="logo" className="h-20"/></a>
          </div>
          <div className="flex justify-end items-center ml-auto">
            <ul className='list-none flex gap-1 sm:gap-9 uppercase mr-4 sm:mr-14'>
              <li className="hover:bg-gray-400 rounded-md px-4 py-1">
                <Link href="/home">Home</Link>
              </li>
              <li className="hover:bg-gray-400 rounded-md px-4 py-1">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:bg-gray-400 rounded-md px-4 py-1"> 
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header