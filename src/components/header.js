import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <nav>
      <div className="bg-[#f0f0f0]">
        <div className="flex max-w-screen-xl mx-auto py-2 sm:py-0">
            <a href="/home">
              <img
                src="/assets/logo-bg.png"
                alt="logo"
                className="h-12 sm:h-20 w-auto max-w-xs"
              />
            </a>
          <div className="flex justify-end items-center ml-auto">
            <ul className="list-none flex gap-0 sm:gap-9 uppercase mr-5 sm:mr-14">
              <li className={`py-1 ${router.pathname === '/home' ? 'bg-gray-300' : 'hover:bg-gray-400'} rounded-md`}>
                <Link href="/home" className={`px-3 py-1 ${router.pathname === '/' ? 'bg-gray-300' : ''} rounded-md`}>
                  Home
                </Link>
              </li>
              <li className={`px-2 sm:px-3 py-1 ${router.pathname === '/about' ? 'bg-gray-300' : 'hover:bg-gray-400'} rounded-md`}>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li className={`px-2 sm:px-3 py-1 ${router.pathname === '/contact' ? 'bg-gray-300' : 'hover:bg-gray-400'} rounded-md`}>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
