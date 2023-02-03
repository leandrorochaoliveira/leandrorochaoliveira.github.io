import Image from 'next/image'
import logo from '../../public/logo.svg'
import Menu from './Menu'
import React, { useState, useEffect } from 'react';

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setMenuOpen(window.innerWidth > 1024)
  }, [])

  return (
    <nav className="flex flex-row w-full lg:w-auto justify-between items-center fixed lg:rounded-full lg:left-[50px] lg:right-[50px] lg:top-[40px] h-[80px] bg-[#585d65] text-white p-2 z-50">
      <div id="logo" className="px-4">
        <Image
          src={logo}
          alt="Leandro Rocha"
          height={44}
        />
      </div>
      <div id="menu" className={`absolute left-0 p-4 top-[80px] w-full bg-back lg:relative lg:top-0 lg:p-0 lg:bg-inherit lg:w-auto lg:flex-1 ${menuOpen ?
        'scale-y-100' : 'scale-y-0'
        }`}
      >
        <Menu />
      </div>
      <div id="menu-icon" className='lg:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)} type="button">
          <div className="space-y-2">
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
        </button>

      </div>
      <div id="donwlod-cv" className="h-full">
        <a
          href="https://github.com/cv-cv/cv-cv"
          target="_blank"
          rel="noreferrer"
          className="rounded-full flex items-center justify-center px-8 h-full border border-primary text-primary"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}
