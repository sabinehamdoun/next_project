"use client"
import React from 'react'
import Link from 'next/link'

const Header = () => {
  
  return (
    <nav>
      <div className="menu">
        <div className="container">
        <div>
          <a href="#home"><img src={"/assets/logo-bg.png"} alt="logo" height="80" /></a>
        </div>
        <div className="navlist">
          <ul id="list">
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Header